// *****************************
// JavaScript Operator Precedence (Highest to Lowest)
// *****************************
// Operator precedence determines the order in which operators are evaluated in an expression.
// Operators with higher precedence are evaluated first.

// 1. Grouping ()
//    The expression inside parentheses is always evaluated first.
//    Example: (5 + 2) * 3  // Result: 21 (addition happens before multiplication)

// 2. Member Access . []
//    Accessing object properties or array elements.
//    Example: person.name, list[0]

// 3. New (with arguments)
//    Example: new Date()

// 4. Function Call ()
//    Example: myFunction()

// 5. Postfix Increment/Decrement ++ --
//    Note: The operation happens *after* the value is used.
//    Example: a++

// 6. Logical NOT !, Bitwise NOT ~, Unary +, Unary -, typeof, delete, void, await
//    These operate on a single operand.
//    Example: !isTrue, -5, typeof "hello"

// 7. Exponentiation **
//    Example: 2 ** 3 // 8

// 8. Multiplication *, Division /, Remainder %
//    These have higher precedence than addition/subtraction.
//    Example: 5 + 10 * 2 // Result: 25 (10*2 done first)

// 9. Addition +, Subtraction -
//    Evaluated left-to-right.
//    Example: 10 - 5 + 2 // Result: 7

// 10. Bitwise Shift << >> >>>

// 11. Relational < <= > >= in instanceof

// 12. Equality == != === !==
//    Checks value equality. === checks type too.
//    Example: 5 == "5" // true, 5 === "5" // false

// 13. Bitwise AND &
// 14. Bitwise XOR ^
// 15. Bitwise OR |

// 16. Logical AND &&
//    Stops evaluating if the first operand is false (short-circuit).
//    Example: true && false // false

// 17. Logical OR ||
//    Stops evaluating if the first operand is true.
//    Example: true || false // true

// 18. Conditional (Ternary) ?:
//    Example: condition ? valueIfTrue : valueIfFalse

// 19. Assignment = += -= *= /= %= **=
//    Evaluated right-to-left.
//    Example: x = y = 5 (y gets 5, then x gets y)

// 20. Comma ,
//    Evaluates all operands and returns the last one.
//    Example: (1, 2, 3) // Result: 3


// *****************************
// Examples
// *****************************

let result1 = 100 + 50 * 3;
// 1. 50 * 3 = 150 (Multiplication higher than addition)
// 2. 100 + 150 = 250
console.log(result1); // 250

let result2 = (100 + 50) * 3;
// 1. (100 + 50) = 150 (Parentheses highest precedence)
// 2. 150 * 3 = 450
console.log(result2); // 450

let result3 = 100 + 50 - 25;
// 1. 100 + 50 = 150 (Addition/Subtraction same precedence, left-to-right)
// 2. 150 - 25 = 125
console.log(result3); // 125

let result4 = 5 > 3 && 2 < 4;
// 1. 5 > 3 is true (Relational higher than Logical AND)
// 2. 2 < 4 is true
// 3. true && true is true
console.log(result4); // true
