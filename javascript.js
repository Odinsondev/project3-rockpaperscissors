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
