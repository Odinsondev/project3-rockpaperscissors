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
 
const playerSelection = "Banana";
const computerSelection = getComputerChoice(choice);
console.log(playRound(playerSelection, computerSelection));

