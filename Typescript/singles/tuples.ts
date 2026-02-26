// TOC
//

/* -------------------------------------------------------------------------- */
/*                                    Tuple                                   */
/* -------------------------------------------------------------------------- */

// A tuple is a special kind of array where each position has a specific, known type.

// We can define a tuple type using square brackets, specifying the types of each element in order.
let nameAndAge: [string, number] = ["Martha Jones", 24];
// Error: Type 'string' is not assignable to type 'number'.
nameAndAge[1] = "Donna Noble";
nameAndAge[1] = 42;

// Arrays are mutable, so we can change the values at specific indices.
let nameAndAge2 = ["Martha Jones", 24];
nameAndAge2[1] = "Donna Noble";

/* -------------------------------------------------------------------------- */
/*                                  Readonly                                  */
/* -------------------------------------------------------------------------- */

// Tuples are not immutable by default, but we can make them readonly to prevent changes after initialization.
let nameAndAge3: readonly [string, number] = ["Martha Jones", 24];
// Error: Property 'push' does not exist on type 'readonly [string, number]'.
nameAndAge3.push("Donna Noble");

// keep in mind that readonly is TypeScript specific, which means it's enforced at compile time, but not at runtime

// Without readonly, we can push, pop, or modify the elements of the tuple.

/* -------------------------------------------------------------------------- */
/*                                 Destructing                                */
/* -------------------------------------------------------------------------- */

type UserWithAddress = [string, { city: string; country: string }];

const userData: UserWithAddress = [
  "Aragorn",
  { city: "Minas Tirith", country: "Gondor" },
];

const [userName, { city, country }] = userData;
console.log(city);

/* -------------------------------------------------------------------------- */
/*                                Named Tuples                                */
/* -------------------------------------------------------------------------- */

// Label the elements of a tuple for better readability and maintainability.
type UserDataLabeled = [name: string, age: number, isAdmin: boolean];

// Your editor shows the full type:
// [name: string, age: number, isAdmin: boolean]
function getUser(): UserDataLabeled {
  return ["Frodo", 33, false];
}

// The labels are quite literally just names for the TypeScript tooling, they don't change how the values are accessed
const user: [name: string, age: number] = ["Bilbo", 111];
user[0]; // "Bilbo"
user[1]; // 111

/* -------------------------------------------------------------------------- */
/*                         Optional Elements in Tuples                        */
/* -------------------------------------------------------------------------- */
type HttpResponse = [statusCode: number, data: string, error?: string];
// statusCode: number
// data: string
// error: string | undefined

// Both of these work!
const successResponse: HttpResponse = [200, "Success!"];
const errorResponse: HttpResponse = [404, "", "Resource not found"];

// Error: Optional should be last after all required elements.
// type HttpResponse2 = [statusCode: number, data?: string, error: string];

/* -------------------------------------------------------------------------- */
/*                             Tuple Rest Elements                            */
/* -------------------------------------------------------------------------- */

// We can use rest elements in tuples to allow for a variable number of elements at the end of the tuple.
type UserWithRoles = [name: string, ...roles: string[]];
const user1: UserWithRoles = ["Alice", "admin", "editor"];
const user2: UserWithRoles = ["Bob"]; // No roles, just the name
// This is nice when you want a tuple to have a fixed-length beginning but a flexible-length ending: