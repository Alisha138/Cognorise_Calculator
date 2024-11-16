const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let operator = '';
let firstOperand = '';
let secondOperand = '';
let result=null;

function setOperand(value) {
    if(operator == ''){
        firstOperand += value;
        display.value = firstOperand;
    }
    else{
        secondOperand += value;
        display.value = `${firstOperand} ${operator} ${secondOperand}`;
    }
}

function setOperator(value) {
    if(firstOperand !== null){
        operator = value;
        display.value = `${firstOperand} ${operator}`;
    }else{
        return;
    }
}

function calculate() {
    if (firstOperand === null && secondOperand === null && operator == '') return; // Prevent calculation without operands
    firstOperand = parseFloat(firstOperand);   //converting string to float
    secondOperand = parseFloat(secondOperand);  //converting string to float
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '\u00D7':  //javascript escape sequence for multiplication
            result = firstOperand * secondOperand;
            break;
        case '\u00F7': //javascript escape sequence for division
            if (secondOperand === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = firstOperand / secondOperand;
            break;
        default:
            return; // No valid operator
    }

    display.value = result; // Show result on display
    firstOperand = result; // Store result for further calculations
    secondOperand = ''; // Clear second operand for next number
    operator = ''; //clear current operator for next operator
}

function clearDisplay() {
    operator = '';
    firstOperand = '';
    secondOperand = '';
    result = null;
    display.value = ''; // Clear display
}
