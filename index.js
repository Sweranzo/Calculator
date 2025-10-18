function addNumbers (a,b) {
 total = a + b;
  return total;
}



function subtractNumbers (a,b) {
  total = a-b;
  return total;
}


function multiplyNumbers (a,b) {
  total = a * b; 
  return total;
}



function divideNumbers(a,b) {
  if (a === 0 && b === 0) {
    alert('You cant divide this shit');
    inputBox.value = '';
  }
  total = a / b;
  return total;
}



const inputBox = document.querySelector ('.inputNumber');
const buttons = document.querySelectorAll('.calculatorButtons');


buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.textContent === '=') {
     const [firstInput, sign, secondInput] = inputBox.value.split(/([+\-*/])/);
     let total = operate(Number(firstInput), sign,Number(secondInput));
      inputBox.value = total;
      console.log([firstInput, sign, secondInput]);
    } else if(btn.textContent === 'Clr') {
      inputBox.value = '';
    }else if (btn.textContent === '←') {
      inputBox.value = inputBox.value.slice(0,-1);
    }else{
  inputBox.value += btn.textContent; 
    }

  });
});


function operate(firstNumber,operator,secondNumber){ 
  let total = '';
  if (operator === '+') { 
    total = addNumbers(firstNumber,secondNumber);
  } else if (operator === '-') {
    total = subtractNumbers(firstNumber,secondNumber);
  } else if (operator === '*') {
    total = multiplyNumbers(firstNumber,secondNumber);
  } else if (operator === '/') {
    total = divideNumbers(firstNumber,secondNumber);
  }

  return total; 
}
