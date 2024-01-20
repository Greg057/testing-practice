function add (a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "not a number"
    return a + b 
}

function subtract (a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "not a number"
    return a - b 
}

function multiply (a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "not a number"
    return a * b 
}

function divide (a, b) {
    if (b === 0) return "dividing by 0 not possible"
    if (typeof a !== "number" || typeof b !== "number") return "not a number"
    return a / b 
}



const calculator = {
    add,
    subtract,
    multiply,
    divide
  };

module.exports = calculator