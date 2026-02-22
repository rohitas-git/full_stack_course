const bootupMessage: string = "Hello World";
const port: number = 3000;
const isServerOnline: boolean = true;
const noValue: null = null;
const notDefined: undefined = undefined;

// TypeScript is incredible at type inference
const bootMessage = "Hello World";

// TypeScript is a superset of JavaScript, meaning that:
// All JavaScript code is valid TypeScript code.
// All TypeScript code is not necessarily valid JavaScript code.

// TypeScript prioritizes developer experience and type safety, not execution speed.
// It runs at JavaScript speed because it compiles to JavaScript.

// The any type - a type that can be anything
// The purpose of types, really, is to narrow down the possible values that a variable can hold. 
// From that perspective, any is the most useless type because it doesn't narrow anything down at all! 
// But it's important because it allows you to opt out of type-checking for a variable.


// The any type is super useful when you migrate 
// an existing JavaScript codebase to TypeScript.