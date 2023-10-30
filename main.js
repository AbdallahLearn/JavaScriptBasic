// Addition
function add(num1, num2) {
    return num1 + num2;
}

// Subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Division
function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: Division by zero";
    }
}

// Usage example
var number1 = 10;
var number2 = 5;

console.log("Addition: " + add(number1, number2)); // Output: 15
console.log("Subtraction: " + subtract(number1, number2)); // Output: 5
console.log("Multiplication: " + multiply(number1, number2)); // Output: 50
console.log("Division: " + divide(number1, number2)); // Output: 2