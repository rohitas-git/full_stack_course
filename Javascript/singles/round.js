
// By shifting the decimal point using string-based exponential notation (like e+2),
// you tell JavaScript to move the "comma" without performing risky floating-point multiplication.

function robustRound(value, decimals) {
  // 1. Shift decimal right: 1.005 becomes "1.005e+2" -> 100.5
  // 2. Round: Math.round(100.5) -> 101
  // 3. Shift decimal left: 101 becomes "101e-2" -> 1.01
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

console.log(robustRound(1.005, 2)); // 1.01 (Correct!)

// Note: For extreme financial accuracy, even this method can occasionally fail 
// with very complex floats. In such cases, 
// developers often use the Intl.NumberFormat API or specialized libraries