// TOC
// 1. Enums
// 2.

/* -------------------------------------------------------------------------- */
/*                                    Enums                                   */
/* -------------------------------------------------------------------------- */

// Enums are a way to define a set of named constants.
// They can be numeric or string-based.

// Numeric Enums
enum Direction {
  North, // 0
  East, // 1
  South, // 2
  West, // 3
}
let myDirection: Direction = Direction.North;
console.log(myDirection); // Outputs: 0

// You can also explicitly set the values, and TypeScript will ensure they're unique:
enum StatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

// --------------------------------Bidirectional Mapping ----------------------------------/
const directionValue: number = Direction.South;
// 2
const directionName: string = Direction[directionValue];
// "South"

/* -------------------------------------------------------------------------- */
/*                                String Enums                                */
/* -------------------------------------------------------------------------- */

enum LogLevel {
  ERROR = "ERROR",
  WARN = "WARN",
  INFO = "INFO",
  DEBUG = "DEBUG",
}

function structuredLog(message: string, level: LogLevel) {
  console.log(`[${level}] ${message}`);
}

structuredLog("User not found", LogLevel.ERROR);
// Outputs: [ERROR] User not found

/* CAUTION: Numeric Enums & Serialization
 * Numeric enums are fine for internal code-only use, but become problematic
 * when serialized to JSON or stored in databases. The numeric value loses
 * context, making API responses and database records confusing to debug.
 * Example: seeing { user_type: 7 } with no clue what 7 means.
 * Prefer string enums for external APIs/storage, or include enum name mappings.
 */

// String enums do not support reverse mapping like numeric enums do. 
// You cannot get the enum member name from its value.

/* -------------------------------------------------------------------------- */
/*                                 Const Enums                                */
/* -------------------------------------------------------------------------- */

// const enums are a special kind of enum that is completely removed during compilation and replaced with their literal values.

// Const enums vs regular enums:
// 1. Performance: Const enums are more performant because they are inlined at compile time, while regular enums have a runtime representation.
// 2. Limitations: Const enums have some limitations compared to regular enums, such as not supporting computed members or reverse mapping.
// 3. Use cases: Const enums are ideal for performance-critical code or when you want to ensure that the enum values are inlined and not accessible at runtime.
// 4. Regular enums are more flexible and can be used in a wider range of scenarios, while const enums are more restrictive but can offer better performance.
// In general, you should use regular enums unless you have a specific reason to use const enums, such as performance concerns or the need for inlining enum values.

const enum Direction {
  North = "NORTH",
  East = "EAST",
  South = "SOUTH",
  West = "WEST",
}

const whereWinterComesFrom = Direction.North;

// Const enums are more performant, but do come with some limitations:
// 1. No computed values: They cannot have computed members.
// 2. Mapping issues: They cannot be used with reverse mapping.
// 3. They cannot be used in ambient contexts (like declaration files).

// 1. No computed values:
// They can reference other enum members, but can't use arbitrary expressions.
const enum FavoriteActor {
  BradPitt = "Brad Pitt",
  AngelinaJolie = "Angelina Jolie",
  // this is okay, it references enum members
  BestCouple = FavoriteActor.BradPitt + " and " + FavoriteActor.AngelinaJolie,
}

const enum FavoriteActor2 {
  BradPitt = "Brad Pitt",
  AngelinaJolie = "Angelina Jolie",
  // this is not okay
  // const enum member initializers must be constant expressions
  BestCouple = getBestCouple(),
}

// Mapping issues: 
// Const enums don't have runtime representation, so getting the name from the number isn't possible.

const enum Direction2 {
    North, // 0
    East, // 1
    South, // 2
    West, // 3
  }
  
  const directionValue = Direction2.West;
  
  // This errors:
  // A const enum member can only be accessed using a string literal.(2476)
  const directionName = Direction2[directionValue];
  
  // and if you do use a string literal, it just returns the value again
  const directionValueAgain = Direction2["West"];
  // 3

// Only use const enums when you are sure you won't need reverse mapping or computed values, and when performance is a concern. 
// For most cases, regular enums are more flexible and easier to work with.
// I'd only use const enums when I'm really concerned about performance and bundle size.

/* -------------------------------------------------------------------------- */
/*                               Enums vs Unions                              */
/* -------------------------------------------------------------------------- */

// They can often be used interchangeably, but there are some differences:
// 1. Enums are a TypeScript-specific feature, while unions are a more general TypeScript type.
// 2. Enums can have both numeric and string values, while unions can only represent a set of literal types.
// 3. Enums have a runtime representation, while unions do not.
// 4. Enums support reverse mapping (for numeric enums), while unions do not.
// 5. Unions can be more flexible and easier to work with in some cases, while enums can provide better performance and type safety in others.

// In general, you should use enums when you need a set of named constants that have a runtime representation and may require reverse mapping. 
// Use unions when you just need to represent a set of literal types without the need for a runtime representation or reverse mapping.

// I prefer Unions over Enums because:
// - They are more flexible and easier to work with in many cases.
// - They don't add extra runtime code, which can be beneficial for performance and bundle size.
// - They can be used in more contexts, such as with string literals, without needing to define a separate enum.
// - They can be more readable and easier to understand in some cases, especially when the set of values is small and self-explanatory.

// Pros of Unions
// Unions are what you use for complex types, so it feels consistent to use them for primitives as well
// Unions don't add any additional runtime code
// It's less verbose to write a union

// Pros of Enums
// Enums are slightly easier to refactor because if you change the value of a label (e.g. "Hearts" to "hearts"), you don't have to change the string literal in every place you use it.
// If you're using numerical enums, then the reverse mapping can be useful I guess.
// CardSuit.Hearts provides more context than just "Hearts". 
// That said, any good editor is going to say type CardSuit on hover, so it's not a huge win.

enum CardSuit {
  Hearts = "Hearts",
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Spades = "Spades",
}

type CardSuit2 = "Hearts" | "Diamonds" | "Clubs" | "Spades";





