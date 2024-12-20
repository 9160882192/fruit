// Basic Calculator
function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

// Example usage:
console.log(calculator(10, 5, '+')); // Output: 15
console.log(calculator(10, 5, '/')); // Output: 2
