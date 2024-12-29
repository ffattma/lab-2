
function applyOperation(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}


function multiply(a, b) {
    return a * b;
}

console.log(applyOperation(5, 3, add));
console.log(applyOperation(5, 3, multiply));


