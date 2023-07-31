//Computer Choice

function getRandomInteger(min, max) {
  return Math.floor((Math.random() * (max - min) + min) * 10);
}

let choice = getRandomInteger(0.1, 0.4)

console.log("Test computer choice: " + (choice))

function getComputerChoice(choice) {
  if (choice == 1) {
    return "Rock"
  } else if (choice == 2) {
    return "Paper"
  } else {
    return "Scissors"
  }
  }

console.log("Test computer choice: " + (getComputerChoice(choice)))


//Get player choice from button and get computer choice and playRound

let playerSelection = ""
let computerSelection = ""

const buttonRock = document.getElementById('button1');
const selection1 = buttonRock.addEventListener('click', selectRock);

function selectRock() {
  choice = getRandomInteger(0.1, 0.4)
  computerSelection = getComputerChoice(choice);
  console.log("Computer choice: " + getComputerChoice(choice))
  playerSelection = "ROCK";
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerScore)
  console.log(computerScore)
}

const buttonPaper = document.getElementById('button2');
const selection2 = buttonPaper.addEventListener('click', selectPaper);

function selectPaper() {
  choice = getRandomInteger(0.1, 0.4)
  computerSelection = getComputerChoice(choice);
  console.log("Computer choice: " + getComputerChoice(choice))
  playerSelection = "PAPER";
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerScore)
  console.log(computerScore)
}

const buttonScissors = document.getElementById('button3');
const selection3 = buttonScissors.addEventListener('click', selectScissors);

function selectScissors() {
  choice = getRandomInteger(0.1, 0.4)
  computerSelection = getComputerChoice(choice);
  console.log("Computer choice: " + getComputerChoice(choice))
  playerSelection = "SCISSORS";
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerScore)
  console.log(computerScore)
}


//plays a single round of Rock Paper Scissors and modifies DOM to display Result

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "ROCK") {
    //modifies DOM to display round result
    let div = document.getElementById('dir');
    let p = document.getElementById('results');
    results.textContent = "Tie. You both chose Rock.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    dir0.appendChild(p0);
    //check winner
    checkWinner();
    //console message
    return "Tie. You both chose Rock.";
  } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER") {
    //modifies DOM to display round result
    let div = document.getElementById('dir');
    let p = document.getElementById('results');
    results.textContent = "Sorry! You loose. Paper beats rock.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    dir0.appendChild(p0);
    //updates score and modifies DOM to display score
    computerScore = computerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    dir2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Sorry! You loose. Paper beats rock."
  } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") {
    //modifies DOM to display round result
    let div = document.getElementById('dir');
    let p = document.getElementById('results');
    results.textContent = "Congratulations! You win. Rock beats scissors.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    dir0.appendChild(p0);
    //updates score and modifies DOM to display score
    playerScore = playerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    dir2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Congratulations! You win. Rock beats scissors."
  } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK") {
    //modifies DOM to display round result
    let div = document.getElementById('dir');
    let p = document.getElementById('results');
    results.textContent = "Congratulations! You win. Paper beats rock.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    dir0.appendChild(p0);
    //updates score and modifies DOM to display score
    playerScore = playerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    dir2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Congratulations! You win. Paper beats rock."
  } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "PAPER") {
    //modifies DOM to display round result
    let div = document.getElementById('dir');
    let p = document.getElementById('results');
    results.textContent = "Tie. You both chose paper.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    dir0.appendChild(p0);
    //check winner
    checkWinner();
    //console message
    return "Tie. You both chose paper."
  } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS") {
    //modifies DOM to display round result
    let div = document.getElementById('dir');
    let p = document.getElementById('results');
    results.textContent = "Sorry! You loose. Scissors beat paper.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    dir0.appendChild(p0);
    //updates score and modifies DOM to display score
    computerScore = computerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    dir2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Sorry! You loose. Scissors beat paper."
  } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
    //modifies DOM to display round result
    let div = document.getElementById('dir');
    let p = document.getElementById('results');
    results.textContent = "Sorry! You loose. Rock beats scissors.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    dir0.appendChild(p0);
    //updates score and modifies DOM to display score
    computerScore = computerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    dir2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Sorry! You loose. Rock beats scissors."
  } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
    //modifies DOM to display round result
    let div = document.getElementById('dir');
    let p = document.getElementById('results');
    results.textContent = "Congratulations! You win. Scissors beats paper.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    dir0.appendChild(p0);
    //updates score and modifies DOM to display score
    playerScore = playerScore + 1;
    p2.textContent = playerScore + " - " + computerScore;
    dir2.appendChild(p2);
    //check winner
    checkWinner();
    //console message
    return "Congratulations! You win. Scissors beats paper."
  } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "SCISSORS") {
    //modifies DOM to display round result
    let div = document.getElementById('dir');
    let p = document.getElementById('results');
    results.textContent = "Tie. You both chose scissors.";
    div.appendChild(p);
    //modifies DOM to display computer choice
    p0.textContent = computerSelection;
    dir0.appendChild(p0);
    //check winner
    checkWinner();
    //console message
    return "Tie. You both chose scissors."
  } else {
    return playerSelection + " is not a valid selection. Please try again!"
  }
}

//DOM manipulation for new score counter

let playerScore = 0
let computerScore = 0

let dir2 = document.getElementById('dir2');
let p2 = document.getElementById('score');

//DOM manipulation to show computer selection

let dir0 = document.getElementById('dir0')
let p0 = document.getElementById('compSelection')

//old checkwinner

function checkWinner() {
  if (playerScore == 3) {
    p2.textContent = "YOU WIN!!!";
    dir2.appendChild(p2);
    alert("You win!");
    location.reload()
    throw new Error("You win!")
  } else if (computerScore ==3) {
    p2.textContent = "YOU LOOSE!!!";
    dir2.appendChild(p2);
    alert("You loose!")
    location.reload()
    throw new Error("You loose!")
  } else {}
}

//let playerChoice = prompt("'Rock, Paper or Scissors' Test round")
//const playerSelection = playerChoice;
//const computerSelection = getComputerChoice(choice);


//console.log(playRound(playerSelection, computerSelection));

//console.log("That was a little test. Now the real game starts. Best of 5. Good luck!")



/* //5 rounds
//round1

function game(playerSelectionX, computerSelectionX) {
  return playRound(playerSelectionX, computerSelectionX);
}

let playerChoice2 = prompt("'Rock, Paper or Scissors' Round 1")
const playerSelection2 = playerChoice2;
choice = getRandomInteger(0.1, 0.4)
const computerSelection2 = getComputerChoice(choice);

console.log(game(playerSelection2, computerSelection2))

//round1 - score

let playerScore = 0
let computerScore = 0
let thing1 = playRound(playerSelection2, computerSelection2)

function score() {
  if (thing1 == "Congratulations! You win. Rock beats scissors." || thing1 == "Congratulations! You win. Paper beats rock." || thing1 =="Congratulations! You win. Scissors beats paper.") {
  playerScore = playerScore + 1;
  return "Point to you"
 } else if (thing1 == "Sorry! You loose. Paper beats rock." || thing1 == "Sorry! You loose. Scissors beat paper." || thing1 == "Sorry! You loose. Rock beats scissors.") {
  computerScore = computerScore + 1
  return "Point to the computer"
 } else {
  return "Try again"
 }
}

console.log(score())

console.log(playerScore)
console.log(computerScore)



//round2

let playerChoice3 = prompt("'Rock, Paper or Scissors' Round 2")
const playerSelection3 = playerChoice3;
choice = getRandomInteger(0.1, 0.4)
const computerSelection3 = getComputerChoice(choice);

console.log(game(playerSelection3, computerSelection3))

//round2 - score

let thing2 = playRound(playerSelection3, computerSelection3)

function score2() {
  if (thing2 == "Congratulations! You win. Rock beats scissors." || thing2 == "Congratulations! You win. Paper beats rock." || thing2 =="Congratulations! You win. Scissors beats paper.") {
  playerScore = playerScore + 1;
  return "Point to you"
 } else if (thing2 == "Sorry! You loose. Paper beats rock." || thing2 == "Sorry! You loose. Scissors beat paper." || thing2 == "Sorry! You loose. Rock beats scissors.") {
  computerScore = computerScore + 1
  return "Point to the computer"
 } else {
  return "Try again"
 }
}
console.log(score2())

console.log(playerScore)
console.log(computerScore)



//round3

let playerChoice4 = prompt("'Rock, Paper or Scissors' Round 3")
const playerSelection4 = playerChoice4;
choice = getRandomInteger(0.1, 0.4)
const computerSelection4 = getComputerChoice(choice);

console.log(game(playerSelection4, computerSelection4))

//round3 - score

let thing3 = playRound(playerSelection4, computerSelection4)

function score3() {
  if (thing3 == "Congratulations! You win. Rock beats scissors." || thing3 == "Congratulations! You win. Paper beats rock." || thing3 =="Congratulations! You win. Scissors beats paper.") {
  playerScore = playerScore + 1;
  return "Point to you"
 } else if (thing3 == "Sorry! You loose. Paper beats rock." || thing3 == "Sorry! You loose. Scissors beat paper." || thing3 == "Sorry! You loose. Rock beats scissors.") {
  computerScore = computerScore + 1
  return "Point to the computer"
 } else {
  return "Try again"
 }
}
console.log(score3())

console.log(playerScore)
console.log(computerScore)

//round3 - check winner

function checkWinner() {
  if (playerScore == 3) {
    alert("You win!")
    throw new Error("You win!")
  } else if (computerScore ==3) {
    alert("You loose!")
    throw new Error("You loose!")
  } else {}
}

console.log(checkWinner())



//round4

let playerChoice5 = prompt("'Rock, Paper or Scissors' Round 4")
const playerSelection5 = playerChoice5;
choice = getRandomInteger(0.1, 0.4)
const computerSelection5 = getComputerChoice(choice);

console.log(game(playerSelection5, computerSelection5))

//round4 - score

let thing4 = playRound(playerSelection5, computerSelection5)

function score4() {
  if (thing4 == "Congratulations! You win. Rock beats scissors." || thing4 == "Congratulations! You win. Paper beats rock." || thing4 =="Congratulations! You win. Scissors beats paper.") {
  playerScore = playerScore + 1;
  return "Point to you"
 } else if (thing4 == "Sorry! You loose. Paper beats rock." || thing4 == "Sorry! You loose. Scissors beat paper." || thing4 == "Sorry! You loose. Rock beats scissors.") {
  computerScore = computerScore + 1
  return "Point to the computer"
 } else {
  return "Try again"
 }
}
console.log(score4())

console.log(playerScore)
console.log(computerScore)

//round4 - check winner

console.log(checkWinner())



//round5

let playerChoice6 = prompt("'Rock, Paper or Scissors' Round 5")
const playerSelection6 = playerChoice6;
choice = getRandomInteger(0.1, 0.4)
const computerSelection6 = getComputerChoice(choice);

console.log(game(playerSelection6, computerSelection6))

//round5 - score

let thing5 = playRound(playerSelection6, computerSelection6)

function score5() {
  if (thing5 == "Congratulations! You win. Rock beats scissors." || thing5 == "Congratulations! You win. Paper beats rock." || thing5 =="Congratulations! You win. Scissors beats paper.") {
  playerScore = playerScore + 1;
  return "Point to you"
 } else if (thing5 == "Sorry! You loose. Paper beats rock." || thing5 == "Sorry! You loose. Scissors beat paper." || thing5 == "Sorry! You loose. Rock beats scissors.") {
  computerScore = computerScore + 1
  return "Point to the computer"
 } else {
  return "Try again"
 }
}
console.log(score5())

console.log(playerScore)
console.log(computerScore)

//round5 - check winner

console.log(checkWinner())



//round6

let playerChoice7 = prompt("'Rock, Paper or Scissors' Round 6")
const playerSelection7 = playerChoice7;
choice = getRandomInteger(0.1, 0.4)
const computerSelection7 = getComputerChoice(choice);

console.log(game(playerSelection7, computerSelection7))

//round6 - score

let thing6 = playRound(playerSelection7, computerSelection7)

function score6() {
  if (thing6 == "Congratulations! You win. Rock beats scissors." || thing6 == "Congratulations! You win. Paper beats rock." || thing6 =="Congratulations! You win. Scissors beats paper.") {
  playerScore = playerScore + 1;
  return "Point to you"
 } else if (thing6 == "Sorry! You loose. Paper beats rock." || thing6 == "Sorry! You loose. Scissors beat paper." || thing6 == "Sorry! You loose. Rock beats scissors.") {
  computerScore = computerScore + 1
  return "Point to the computer"
 } else {
  return "Try again"
 }
}
console.log(score6())

console.log(playerScore)
console.log(computerScore)

//round6 - check winner

console.log(checkWinner())
 */