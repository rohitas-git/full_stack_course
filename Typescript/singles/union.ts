// Unions
// Union types use the pipe symbol (|) 
// and allow you to specify that a value can be one of several types.

// userId is a string OR a number
let userId: string | number;
userId = "user_42";
userId = 42;


// One really cool thing about TypeScript is that 
// conditional checks actually change the type of a variable. 
// This is called "type narrowing".

function safeSquare(val: string | number): number {
  if (typeof val === "string") {
    val = parseInt(val, 10);
  }
  // now val is only a number
  return val * val;
}

let result = safeSquare("5");
console.log(result);
// 25

result = safeSquare(5);
console.log(result);
// 25

// --------------------- LITERAL TYPES ---------------------
// Literal types are incredibly powerful for narrowing the possible values of a variable.

const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;
// const constantString: "Hello World";

function printText(s: string, alignment: "left" | "right" | "up" | "down") {
  // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre");

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// ---------------------Value Unions ---------------------

type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction) {
  // Implementation...
}


// ---------------------Template Literal Types ---------------------

type Class = "wizard" | "warrior" | "rogue";
type Hero = `elf ${Class}`;

// The type of Class expands automatically to the possible values,
// so the above is the same as:
// type Hero = "elf wizard" | "elf warrior" | "elf rogue";

type Race = "elf" | "human" | "dwarf";
type NeoHero = `Hero: ${Race} ${Class}`;

// You can also create types that enforce a simple pattern match
type logRecord = `${string}: ${number}`;

// this is valid because it's a string followed by a colon and a number
const criticalErr: logRecord = "CRITICAL: 69";

// these are all invalid
// const criticalErr2: logRecord = "CRITICAL 92";
// const criticalErr3: logRecord = "CRITICAL: 92a";
// const criticalErr4: logRecord = "92: CRITICAL";

// --------------------- Giant Unions ---------------------

// So what happens if we create an absolute monstrosity of a union type?
// There's a good chance you'll run into an error like this:
// > Error: Union type too complex to represent.

// Example: type MoveMessage =`The ${Class} moves ${Distance}, ${Distance}, then ${Distance} spaces.`;
// there are still over 5,000 combinations! 
//  TypeScript doesn't like that - it can slow down your editor and compilation times to a crawl. 
// So, at a certain point, tsc says "enough is enough".