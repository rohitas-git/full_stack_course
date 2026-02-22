// LITERAL TYPES
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