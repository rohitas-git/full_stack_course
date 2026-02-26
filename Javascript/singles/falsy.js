
// Values that evaluate to false in JavaScript are called falsy values. 

// There are six falsy values in JavaScript:
// 1. false
// 2. 0 (zero)
// 3. "" (empty string)
// 4. null -> how developer signalizes emptiness 
// 5. undefined -> how JavaScript signalizes emptiness
// 6. NaN (Not a Number) -> result of an invalid mathematical operation

// All other values are considered truthy, meaning they evaluate to true in a boolean context.

// Example of falsy values:
console.log(  Boolean("")   ) // false
console.log(  Boolean(null) ) // false
console.log(  Boolean(NaN)  ) // false
console.log(  Boolean(undefined) ) // false
console.log(  Boolean(0)   ) // false
console.log(  Boolean(false)   ) // false
console.log(  Boolean(-0)   ) // false


// Example of truthy values:
console.log(Boolean(100)); // true
console.log(Boolean("0")); // true
console.log(  Boolean([0])  ) // true
console.log(  Boolean({})  ) // true
console.log(  Boolean(function() {})  ) // true
console.log(  Boolean([])  ) // true


if (true) {
    console.log("This is a truthy value.");
}

if (1) {
    console.log("This is a truthy value.");
}

if ("Hello") {
    console.log("This is a truthy value.");
}

if ([]) {
    console.log("This is a truthy value.");
}

if ({}) {
    console.log("This is a truthy value.");
}