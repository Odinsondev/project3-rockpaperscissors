//Step0 - test console

console.log("Hello World");

//Step1 - figure out how to run and display result for math.random

function getRandom() {
  return Math.random();
}

console.log(getRandom())

//Step2 - figure out how to get 1 or 2 or 3

//Step2.1 - how to store result in a variable and use later

function getRandom2(min, max) {
  return Math.random();
}

let test = getRandom2()

console.log(test)
console.log(test)

function add1(number) {
  return test + number;
}

console.log(add1(1))

//step2.2 - what  * (max - min) + min does

function minmax(min, max) {
  return test * (max - min) + min;
}

console.log(minmax(0.4, 0.5))

//step2.3 - getting integers my way

function minmax10(min, max) {
  return (test * (max - min) + min)*10;
}

console.log(minmax10(0.4, 0.5))

console.log(Math.floor(minmax10(0.4, 0.5)))

//step2.4 - getting 1 or 2 or 3

function getRandomInteger(min, max) {
  return Math.floor((Math.random() * (max - min) + min) * 10);
}

let choice = getRandomInteger(0.1, 0.4)

console.log(choice)

function getComputerChoice(choice) {
  if (choice == 1) {
    return "Rock"
  } else if (choice == 2) {
    return "Paper"
  } else {
    return "Scissors"
  }
  }

console.log(getComputerChoice(choice))

//step3 - Write a function that plays a single round of Rock Paper Scissors


function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "ROCK") {
    return "Tie. You both chose Rock."
  } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER") {
    return "Sorry! You loose. Paper beats rock."
  } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") {
    return "Congratulations! You win. Rock beats scissors."
  } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK") {
    return "Congratulations! You win. Paper beats rock."
  } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "PAPER") {
    return "Tie. You both chose paper."
  } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS") {
    return "Sorry! You loose. Scissors beat paper."
  } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
    return "Sorry! You loose. Rock beats scissors."
  } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
    return "Congratulations! You win. Scissors beats paper."
  } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "SCISSORS") {
    return "Tie. You both chose scissors."
  } else {
    return playerSelection + " is not a valid selection. Please try again!"
  }
}

let playerChoice = prompt("'Rock, Paper or Scissors' Test")
const playerSelection = playerChoice;
const computerSelection = getComputerChoice(choice);


console.log(playRound(playerSelection, computerSelection));

// 5 rounds
//round 1

function game(playerSelectionX, computerSelectionX) {
  return playRound(playerSelectionX, computerSelectionX);
}

let playerChoice2 = prompt("'Rock, Paper or Scissors' Round 1")
const playerSelection2 = playerChoice2;
choice = getRandomInteger(0.1, 0.4)
const computerSelection2 = getComputerChoice(choice);

console.log(game(playerSelection2, computerSelection2))

//score

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




let thing2 = playRound(playerSelection3, computerSelection3)

function score2() {
  if (thing2 == "Congratulations! You win. Rock beats scissors." || thing1 == "Congratulations! You win. Paper beats rock." || thing1 =="Congratulations! You win. Scissors beats paper.") {
  playerScore = playerScore + 1;
  return "Point to you"
 } else if (thing2 == "Sorry! You loose. Paper beats rock." || thing1 == "Sorry! You loose. Scissors beat paper." || thing1 == "Sorry! You loose. Rock beats scissors.") {
  computerScore = computerScore + 1
  return "Point to the computer"
 } else {
  return "Try again"
 }
}
console.log(score2())

console.log(playerScore)
console.log(computerScore)

//
//try to add variable inside function, figure out why didn\t work




//round3

let playerChoice4 = prompt("'Rock, Paper or Scissors' Round 3")
const playerSelection4 = playerChoice4;
choice = getRandomInteger(0.1, 0.4)
const computerSelection4 = getComputerChoice(choice);

console.log(game(playerSelection4, computerSelection4))

//round4

let playerChoice5 = prompt("'Rock, Paper or Scissors' Round 4")
const playerSelection5 = playerChoice5;
choice = getRandomInteger(0.1, 0.4)
const computerSelection5 = getComputerChoice(choice);

console.log(game(playerSelection5, computerSelection5))


//round5

let playerChoice6 = prompt("'Rock, Paper or Scissors' Round 5")
const playerSelection6 = playerChoice6;
choice = getRandomInteger(0.1, 0.4)
const computerSelection6 = getComputerChoice(choice);

console.log(game(playerSelection6, computerSelection6))