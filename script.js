let displayValue = '0';
let operator = null;
let prevValue = 0;



function updateDisplay() {
  const display = document.getElementById('value');
  if (operator !== null) {
    display.innerText = prevValue + ' ' + operator + ' ' + displayValue;
  } else {
    display.innerText = displayValue;
  }
}

function appendToDisplay(digit) {
  if (displayValue === '0') {
    displayValue = digit;
  } else {
    displayValue += digit;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operator = null;
  prevValue = 0;
  updateDisplay();
}

function deleteLast() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = '0';
  }
  updateDisplay();
}

function performOperation(op) {
  if (operator !== null) {
    calculate();
  }
  operator = op;
  prevValue = parseFloat(displayValue);
  displayValue = '0';
}

function appendDecimal(decimal) {
  if (!displayValue.includes(decimal)) {
    displayValue += decimal;
    updateDisplay();
  }
}

function calculate() {
  const currentValue = parseFloat(displayValue);
  let result = prevValue;

  switch (operator) {
    case '+':
      result += currentValue;
      break;
    case '-':
      result -= currentValue;
      break;
    case 'x':
      result *= currentValue;
      break;
    case '÷':
      result /= currentValue;
      break;
    default:
      return;
  }

  displayValue = result.toString();
  operator = null;
  updateDisplay();
}



updateDisplay();
