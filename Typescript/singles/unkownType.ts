/* -------------------------------------------------------------------------- */
/*                                Unknown Type                                */
/* -------------------------------------------------------------------------- */

// The unknown type is a special type in TypeScript that represents any value, but unlike the any type, it doesn't allow you to perform operations on it without first asserting its type.
// The any type is like saying "I don't care about the type of this value, just let me use it however I want", 
// while the unknown type is like saying "I don't know the type of this value, so I need to check it before I can use it".

// The “any” Problem ------------
function processData1(data: any) {
  // TypeScript allows this even though it might crash
  console.log(data.toLowerCase());

  // TypeScript allows this too - it's like we're using plain JavaScript
  return data.nonExistentMethod();
}

// No errors when calling the function
processData(42); // Will crash at runtime

// The “unknown” Solution ------------
function processData2(data: unknown) {
  // Error: Object is of type 'unknown'
  console.log(data.toLowerCase());

  // Error: Object is of type 'unknown'
  return data.nonExistentMethod();
}

// Now we have to explicitly check the type before using it
function processData(data: unknown) {
  // We do a type assertion
  if (typeof data === "string") {
    // Now TypeScript knows data is a string
    console.log(data.toLowerCase());
    return data;
  }
  if (typeof data === "number") {
    // Now TypeScript knows data is a number
    return data * 2;
  }

  // Throw an error for other types
  // that we can't handle
  throw new Error("Expected string data");
}

// When to Use unknown
// Unknown is a fantastic alternative to any when it comes to dealing with values 
// that are coming into your program from the outside world (e.g. user input, API responses, etc.). 
// It forces you to add type checks at that I/O boundary so that you can then be confident working with the data inside your program.

