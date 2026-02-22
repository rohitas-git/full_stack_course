// OPTIONAL PARAMETERS
// You can specify function parameters as optional with a question mark (?) after the name:

function greet(name: string = "Mario", title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

greet("Gandalf"); // "Hello, Gandalf!"
greet("Gandalf", "Wizard"); // "Hello, Wizard Gandalf!"

// There are two rules to keep in mind:
// 1.Optional parameters must come after all required parameters.
// 2.Optional params have an undefined automatically unioned on the specified type.
//  If the value is omitted, it's undefined instead of the specified type.

// DEFAULT PARAMETERS
// Default parameters provide fallback values for optional arguments

// When you use default parameters, you do not need to mark the parameter as optional by using ?.
// When using a default value, the parameter type can be automatically inferred, so don't specify it

function newCharacter(name: string, role: string = "warrior"): string {
  return `${name} is a ${role}`;
}

console.log(newCharacter("Gandalf"));
// Gandalf is a warrior
console.log(newCharacter("Gandalf", "wizard"));
// Gandalf is a wizard

function countdown(start = 10): void {
  // start is a number
  console.log(`Counting down from ${start}...`);
}