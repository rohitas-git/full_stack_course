// TOC
// 1. Intersection Types

/* -------------------------------------------------------------------------- */
/*                           Intersections of Types                           */
/* -------------------------------------------------------------------------- */

// An intersection type combines multiple types into one with the & operator.
// The resulting intersection type satisfies all the component types simultaneously.

type IndividualContributor = {
  id: number;
  name: string;
  tasks: string[];
};

type Manager = {
  directReports: number[];
};

type GoodManager = IndividualContributor & Manager;

const hunter: GoodManager = {
  id: 1,
  name: "Hunter Backmann",
  tasks: ["Fixing Lane's B*llsh*t code", "Vibe Coding"],
  directReports: [2, 3, 4],
};

type Point2D = {
  x: number;
  y: number;
};

type Point3D = Point2D & {
  z: number;
};

// Equivalent to:
// type Point3D = {
//   x: number;
//   y: number;
//   z: number;
// };

/* -------------------------------------------------------------------------- */
/*                               The Never Type                               */
/* -------------------------------------------------------------------------- */

// In TypeScript, the never type represents values that can't occur
// It is often used to indicate that a function never returns or that a variable can never have a value.
// Never is a subtype of every type, but no type is a subtype of never (except never itself).
// This means that you can assign a value of type never to any other type, but you cannot assign any value to a variable of type never.

function handleStatusCode(code: 200 | 404 | 500) {
  if (code === 200) {
    console.log("OK");
    return;
  }
  if (code === 404) {
    console.log("Not Found");
    return;
  }
  if (code === 500) {
    console.log("Internal Server Error");
    return;
  }
  // no errors! code is never
  const err: never = code;
  return err;
}

// If we assign code to never, TypeScript will complain unless code has actually been narrowed down to no possible values.
// This is a common pattern to ensure that all cases have been handled in a switch statement or if-else chain.
// If we forget to handle one of the cases, TypeScript will give us an error at the line where we assign code to never, alerting us to the unhandled case.

/* -------------------------------------------------------------------------- */
/*                       Intersecting Incompatible Types                      */
/* -------------------------------------------------------------------------- */

type Saiyan = {
  name: string;
  powerLevel: number;
};

type Human = {
  name: string;
  age: number;
};

type SaiyanHuman = Saiyan & Human;

// type SaiyanHuman = {
//     name: string;
//     powerLevel: number;
//     age: number;
//   };

type Saiyan2 = {
  name: "goku" | "vegeta";
  powerLevel: number;
};

type Human2 = {
  name: "krillin" | "yamcha";
  age: number;
};

type SaiyanHuman2 = Saiyan2 & Human2;

const theLaneagen: SaiyanHuman2 = {}; // Error: Type '{}' is not assignable to type 'never'.

// So, the name property in SaiyanHuman2 becomes never,
// which in turn makes the entire SaiyanHuman2 type never.
// It's TypeScript saying, "Hey, the SaiyanHuman2 type is impossible, do something else."

export type SentimentTag = {
  type: "positive" | "neutral" | "negative";
  score: number;
  flagged: boolean;
};

export type ChannelTag = {
  type: "chat" | "email" | "phone";
  receivedAt: string;
  verified: boolean;
};

export type ReviewMethod = "manual_review" | "auto_process";

// Intersection on type here would never
// So, we combine them into a single type instead of using an intersection
export type TicketMetadata = {
  sentiment: SentimentTag;
  channel: ChannelTag;
};

/* -------------------------------------------------------------------------- */
/*                          Intersections vs. Unions                          */
/* -------------------------------------------------------------------------- */

// Unions
// Use the | operator (suspiciously similar to the logical OR operator)
// Widen the resulting type (more possible values)
// Useful for modeling mutually exclusive options or states

// Intersections
// Use the & operator (like logical AND)
// Narrow the resulting type (fewer possible values)
// Useful for combining multiple constraints or adding more required properties to existing types

// Use unions to say your type is "this OR that"
// Use intersections to say your type is "this AND that", or sometimes more simply, 
//      "this with the additional properties of that"

/* -------------------------------------------------------------------------- */
/*                              Super Set Unions                              */
/* -------------------------------------------------------------------------- */

// if:
// - Any string can be used as an error slug
// - "OK", "NOT_FOUND", and "INTERNAL_ERROR" are the most common values 
//   and we like to have them show up in autocomplete

// super set unions: a union of specific string literals and a more general string type
type ErrorCodes = "OK" | "NOT_FOUND" | "INTERNAL_ERROR" | (string & {});

const error: ErrorCodes = "SOMETHING_WENT_WRONG"; // Valid, but not in autocomplete
const error2: ErrorCodes = "OK"; // Valid and in autocomplete

// "Why wouldn't I just use string - the set of allowed values is the same?"
// Because if we just use string, then we lose the autocomplete for the specific error codes.
// By adding (string & {}), TypeScript won't change which values are allowed. 
// Any string is allowed. But it will still give us autocomplete in our editor 
// for the values "OK", "NOT_FOUND", and "INTERNAL_ERROR".  

