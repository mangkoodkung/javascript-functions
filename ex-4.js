// Start coding here
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let calculator = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};

let addResult = calculator.add(10, 20);
console.log(addResult); // 30

let divideResult = calculator.divide(3000, 10);
console.log(divideResult); // 4
