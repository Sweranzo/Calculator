function addNumbers (a,b) {
 total = a + b;
  return total;
}

console.log(addNumbers(5,5));

function subtractNumbers (a,b) {
  total = a-b;
  return total;
}

console.log(subtractNumbers(10,5));

function multiplyNumbers (a,b) {
  total = a * b; 
  return total;
}

console.log(multiplyNumbers(5,5));


function divideNumbers(a,b) {
  total = a / b;
  return total;
}

console.log(divideNumbers(5,10));


const inputBox = document.querySelector ('.inputNumber');
const buttons = document.querySelectorAll('.calculatorButtons');


buttons.addEventListener('click', () => {
  console.log(buttons.value);
})