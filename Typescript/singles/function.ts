// Explicit Return
// - Author-Intended return type
// - Prevents contract screw-up

// When to use? Code used by 'others'
function divide2(a: number, b: number): number {
  return a / b;
}

// Inferred Return
// - it is more accurate or narrow
// - Less typing

// When to use? Code used by 'me'
function divide1(a: number, b: number) {
  return a / b;
}

// The TS-specific void type represents 
// the return value of functions that don't return a value.
function logMessage(message: string): void {
  console.log(message);
  // nothing is returned here!
}