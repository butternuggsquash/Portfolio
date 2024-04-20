const display = document.getElementById("display");
let activeNumber = "first";
let firstNumber = "";
let secondNumber = "";
let result;
let singleTotal = 0;
let combinedTotal = 0;
let firstTotal = 0;

function appendToDisplay(input) {
  if (activeNumber === "first") {
    firstNumber += input;
    display.value += input;
  } else {
    secondNumber += input;
    display.value += input;
  }
}

function dBtn() {
  if (activeNumber === "first") {
    display.value += "d";
    activeNumber = "second";
  } else {
    return;
  }
}

function calculate() {
  if (
    firstNumber === 0 ||
    secondNumber === 0 ||
    activeNumber === "first" ||
    firstNumber === "" ||
    secondNumber === ""
  ) {
    display.value = "ERROR";
  } else if (firstNumber === "1" || firstNumber === 1) {
    Number(secondNumber);
    result = Math.random() * secondNumber + 1;
    display.value = result;
  } else if (typeof result == "string") {
    display.value = combinedTotal;
  } else {
    Number(firstNumber);
    Number(secondNumber);
    singleTotal = Math.trunc(Math.random() * secondNumber + 1);
    console.log(singleTotal);
    combinedTotal += singleTotal;
    result = singleTotal;
    singleTotal = 0;
    for (let i = 1; i < firstNumber; i++) {
      singleTotal = Math.trunc(Math.random() * secondNumber + 1);
      combinedTotal += singleTotal;
      result += ", " + singleTotal;
      singleTotal = 0;
    }
    display.value = result;
  }
}

function rollHigh() {
  calculate()
  result = JSON.parse("[" + result + "]");
  result = Math.max(...result);
  display.value = result;
}

function rollLow() {
  calculate()
  result = JSON.parse("[" + result + "]");
  result = Math.min(...result);
  display.value = result;
}

function calculateArray() {
  Number(firstNumber);
  Number(secondNumber);
  for (let i = 1; i <= firstNumber; i++) {
    result = Math.trunc(Math.random() * secondNumber + 1) + result;
  }
}

function clearDisplay() {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  activeNumber = "first";
  result = 0;
  sum = 0;
  singleTotal = 0;
  combinedTotal = 0;
  firstTotal = 0;
}