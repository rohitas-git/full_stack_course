// Table of Contents
// 1. [Object Literal Types](#object-literal-types)
// 2. [Extra Properties](#extra-properties)
// 3. [Optional Object Properties](#optional-object-properties)
// 4. [Empty Object Type](#empty-object-type)
// 5. [Discriminated Unions](#discriminated-unions)
// 6. [Sets](#sets)
// 7. [Map](#map)
// 8. [Dynamic Keys](#dynamic-keys)
// 9. [Dynamic Default Properties](#dynamic-default-properties)
// 10. [PropertyKey & Symbol](#propertykey-symbol)

/* -------------------------------------------------------------------------- */
/*                              OBJECT LITERAL TYPES                          */
/* -------------------------------------------------------------------------- */

// Object literal types allow you to describe the shape of an object:
// Object literal types are defined using curly braces {} and specify the properties and their types that an object should have.
// Equivalent to struct in rust, class in c++/java, record in c#
type Saiyan = {
  name: string;
  power: number;
};

function logSaiyan(saiyan: Saiyan) {
  console.log(`${saiyan.name} has power level: ${saiyan.power}!`);
  // ...
}

export type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
};

/* -------------------------------------------------------------------------- */
/*                              Extra Properties                              */
/* -------------------------------------------------------------------------- */
// Most of the time, when you pass an object to a function in TypeScript, it's:
// - Okay to have more properties than those defined in the function's parameter type
// - Not okay to have missing properties

type Spaceship = {
  name: string;
  speed: number;
};

// Extra properties are allowed when you pass an object that has at least the required properties.
// However, if you use an object literal directly, TypeScript will check for excess properties and throw an error if there are any.
const falcon = {
  name: "Millennium Falcon",
  speed: 75,
  weapons: 4,
};

function pilot(ship: Spaceship) {
  console.log(`Piloting ${ship.name} at ${ship.speed} light-years per hour`);
}

// this is fine
pilot(falcon);

// * Error: Object literal may only specify known properties, and 'weapons' does not exist in type 'Spaceship'.
// pilot({ name: "Millennium Falcon", speed: 75, weapons: 4 });

/* -------------------------------------------------------------------------- */
/*                         Optional Object Properties                         */
/* -------------------------------------------------------------------------- */

type Superhero = {
  name: string;
  strength: number;
  cape?: boolean; // cape is optional (boolean | undefined)
};

/* -------------------------------------------------------------------------- */
/*                              Empty Object Type                             */
/* -------------------------------------------------------------------------- */

// An empty object type is written as {} and it represents an object that has no properties.
// It is the most general type for objects, and it can be assigned any value, including primitives like strings, numbers, and booleans, as well as more complex objects. However, when you define a variable with the type {}, it means that the variable can hold any value, but it does not have any specific properties or methods associated with it. This is why you can assign a string to newUser without any error, but if you try to assign an object with properties to another variable of type string, you will get an error because the types are incompatible.
type EmptyObject = {};

// Behavior of empty object type:
// 1. It accepts almost anything
// 2. It does not allow any properties when using object literals directly (You cannot access properties)
// 3. Why we avoid it for data structures: It does not provide any type safety or structure, so it's not useful for defining data structures. It can lead to bugs and confusion because it allows any value without any constraints.

const empty: EmptyObject = {}; // This is fine
// const notEmpty: EmptyObject = { name: "Not Empty" };
// Error: Object literal may only specify known properties, and 'name' does not exist in type '{}'.

let newUser = {};
newUser = falcon; //This is valid!
newUser = "Goku"; // Can't access properties of string, but it's still valid because {} can accept any value.
// You can reassign the variable, which initially held an empty object to a string.
// In fact, you can reassign it to anything except null or undefined because everything else is technically an object in JS
// This is fine because the type of newUser is {} which can be assigned any value, including a string.

let anotherUser: string = "Lane";
// anotherUser = {}; // Error: Type '{}' is not assignable to type 'string'.

/* -------------------------------------------------------------------------- */
/*                            Discriminated Unions                            */
/* -------------------------------------------------------------------------- */

// A discriminated union is a TypeScript pattern for a union of object types where:

// Every member type has a shared property name (the discriminant/tag), typically kind
// Each member gives that property a different string literal value (like "internal" vs "external")
// That tag lets TypeScript narrow the union inside conditionals, so you can safely access fields that only exist on one variant.

type MultipleChoiceLesson = {
  kind: "multiple-choice"; // Discriminant property
  question: string;
  studentAnswer: string;
  correctAnswer: string;
};

type CodingLesson = {
  kind: "coding"; // Discriminant property
  studentCode: string;
  solutionCode: string;
};

type Lesson = MultipleChoiceLesson | CodingLesson;

function isCorrect(lesson: Lesson): boolean {
  switch (lesson.kind) {
    case "multiple-choice":
      return lesson.studentAnswer === lesson.correctAnswer;
    case "coding":
      return lesson.studentCode === lesson.solutionCode;
  }
}

// "kind" is a convention for the discriminant property,
// but you can use any property as the discriminant as long as it has a literal type (like "multiple-choice" or "coding")
// The discriminant allows TypeScript to narrow down the type of lesson within each case of the switch statement

/* -------------------------------------------------------------------------- */
/*                                    Sets                                    */
/* -------------------------------------------------------------------------- */
// A set is a collection of unique values.
// It is similar to an array, but it does not allow duplicate values and it does not maintain the order of the elements.
// In TypeScript, you can use the built-in Set class to create a set of any type.

// A Set that contains only strings
const justiceLeague = new Set<string>();

justiceLeague.add("Green Arrow");
justiceLeague.add("Flash");
justiceLeague.delete("Flash");
justiceLeague.forEach((member) => console.log(member));
justiceLeague.has("Green Arrow"); // true
justiceLeague.has("Flash"); // false
justiceLeague.size; // 1
// Error: Argument of type '2' is not assignable to parameter of type 'string'
// justiceLeague.add(2);

// A Set automatically removes duplicate values from an array
const names = ["plasticman", "firestorm", "plasticman"];
const justiceLeague2 = new Set<string>(names);

console.log(justiceLeague2);
// Set { 'plasticman', 'firestorm' }

/* -------------------------------------------------------------------------- */
/*                                     Map                                    */
/* -------------------------------------------------------------------------- */

// Map is a collection of key-value pairs where the keys can be of any type, and the values can also be of any type.
// In TypeScript, you can use the built-in Map class to create a map of any key and value types.

const heroPowers = new Map<string, number>();

heroPowers.set("Superman", 100);
heroPowers.set("Batman", 85);
heroPowers.set("Wonder Woman", 90);
heroPowers.get("Superman"); // 100
heroPowers.has("Batman"); // true
heroPowers.delete("Batman");
heroPowers.has("Batman"); // false
heroPowers.size; // 1

for (const [hero, power] of heroPowers) {
  console.log(`${hero} has power level ${power}`);
}

export function getFileLength(files: Map<string, string>, filename: string) {
  if (files.has(filename)) {
    const fileContent = files.get(filename);
    const textEncoder = new TextEncoder();
    const encoded = textEncoder.encode(fileContent);
    return encoded.length;
  }
  return 0;
}

/* -------------------------------------------------------------------------- */
/*                                Dynamic Keys                                */
/* -------------------------------------------------------------------------- */

// In TypeScript, you can use dynamic keys in object types by using index signatures.
// An index signature allows you to define a type for the keys of an object when the keys are not known in advance.
// This is useful for cases where you want to create an object that can have any number of properties with a certain type.

// Static keys
//  Keys are known in advance and defined explicitly in the type.
type UserMetricsStatic = {
  posts: number;
  followers: number;
  following: number;
};

// Dynamic keys
// Keys are not known in advance and can be any string, but all values must be of a specific type (number in this case).
type UserMetrics = {
  [key: string]: number;
};

// keys are strings and values are numbers, but we don't know the specific keys in advance.
const metrics: UserMetrics = {
  wordsPerMinute: 50,
  errors: 2,
  timeOnPage: 120,
};

metrics["refreshRate"] = 60; // OK
// metrics["theme"] = "dark"; // Error: Type 'string' is not assignable to type 'number'

/* -------------------------------------------------------------------------- */
/*                         Dynamic Default Properties                         */
/* -------------------------------------------------------------------------- */

type FormData = {
  [field: string]: string;
  email: string;
  password: string;
};

// The object must have an email and password property,
// and it can have any number of additional string properties.

// Only use dynamic keys when you truly need unknown keys.
// If you have optional keys, just use the ? operator.

/* -------------------------------------------------------------------------- */
/*                         PropertyKey & Symbol                               */
/* -------------------------------------------------------------------------- */
// In TypeScript, the PropertyKey type is a built-in type that represents the type of keys that can be used in objects.
// It is defined as a union of string, number, and symbol types, which are the valid types for object keys in JavaScript.

// Built-in type that represents the type of keys that can be used in objects
type PropertyKey = string | number | symbol;

type InfrastructureTags = {
  [key: PropertyKey]: any;
};

const janesServer: InfrastructureTags = {
  name: "Jane's Server",
  1: 420,
  [Symbol("role")]: "Admin",
};

// What is a symbol in TypeScript?
// A symbol is a primitive data type that represents a unique identifier.
// It is created using the Symbol() function and can be used as a key for object properties.
// Each symbol is guaranteed to be unique, even if they have the same description.
// This makes symbols useful for creating private properties on objects, as they cannot be accessed using dot notation and are not enumerable in for...in loops.

// A symbol is a unique and immutable data type that may be used as an object property name.
// It's kinda like a string, but it's guaranteed to be unique.

// To read or write a symbol-keyed property,
// use the symbol itself with bracket notation. Dot notation won't work.
const ROLE = Symbol("role");
const user = { [ROLE]: "Admin" };
user[ROLE]; // "Admin"
// user.ROLE; // undefined

export const TWO_FACTOR = Symbol("twoFactor");
export const BIOMETRIC_LOCK = Symbol("biometricLock");

export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [TWO_FACTOR]: boolean;
  [BIOMETRIC_LOCK]: boolean;
};

export function isSecure(preferences: MailPreferences) {
  let security = preferences[TWO_FACTOR] || preferences[BIOMETRIC_LOCK];
  return security;
}

/* -------------------------------------------------------------------------- */
/*                              ReadOnly Modifier                             */
/* -------------------------------------------------------------------------- */

// The Readonly modifier in TypeScript is a utility type that marks property of an object type read-only.

// Normal object properties are fully mutable, but if we use readonly, we can make a property immutable:

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Point = {
  readonly x: number;
  y: number;
};

// To "change" a readonly object you must create a new object
// (copying fields and altering what you need).
// Doing that frequently becomes verbose and cumbersome.

// Use const when you only need to prevent reassigning the variable reference.
// Use readonly when you need strong, API-level immutability guarantees for objects.

// Rule of thumb:
// Prefer const for local convenience;
// reserve readonly for cases where immutability is intentional and worth the extra copying overhead.

/* -------------------------------------------------------------------------- */
/*                        “As Const” and Object.freeze                        */
/* -------------------------------------------------------------------------- */

// as const - compile-time immutability
// Object.freeze - runtime immutability

// compile-time immutability means that the TypeScript compiler will enforce that the properties of the object cannot be changed after it is defined.
// runtime immutability means that the JavaScript engine will prevent any modifications to the object at runtime, throwing an error if you try to change it.

// "As const" is a TypeScript assertion that tells the compiler to treat an object or array as a literal type,
//    making all its properties read-only and inferring the most specific types for its values.
// It is a way to create a deeply immutable object or array without having to define a separate type for it.

// Object.freeze is a JavaScript method that prevents modifications to an object, making it immutable at runtime.

// However, Object.freeze does not provide type safety at compile time, and it only works for the top-level properties of the object.
// "As const" provides type safety at compile time and makes all properties of the object read-only, but it does not prevent modifications at runtime.
// Therefore, "as const" is a TypeScript feature for type safety, while Object.freeze is a JavaScript feature for runtime immutability.

// both "as const" and Object.freeze can be used together to create an object that is both compile-time and runtime immutable.
export const defaultPreferences = Object.freeze({
  name: "Kreese",
  doNotDisturb: false,
  outOfOffice: false,
} as const);

// example of compile-time immutability with "as const" but runtime mutability without Object.freeze
const userSettings = {
  theme: "dark",
  notifications: true,
} as const;

// userSettings.theme = "light"; // Error: Cannot assign to 'theme' because it is a read-only property.
// However, at runtime, you can still modify the object if you don't use Object.freeze
userSettings["theme"] = "light"; // This will work at runtime, but it will not change the type of userSettings.theme which is still "dark" due to "as const".
console.log(userSettings.theme); // Output: "light"

// runtime immutability with Object.freeze but no compile-time immutability without "as const"
const appSettings = Object.freeze({
  theme: "dark",
  notifications: true,
});
console.log(appSettings.theme); // Output: "dark"
// appSettings.theme = "light"; // Error at runtime: Cannot assign to read only property 'theme' of object '#<Object>'

const frozenConfig = Object.freeze({
  apiUrl: "https://api.cobrakai.com",
  admins: {
    johnny: "lawrence",
    daniel: "larusso",
  },
  features: ["no mercy", "not crying", "winning too much"],
});

// Error: Cannot assign to 'apiUrl' because it is a read-only property
frozenConfig.apiUrl = "https://api.karate.com";

// This is fine because nested properties are not frozen automatically
frozenConfig.admins.johnny = "kreese";

// This is also fine because the array is not frozen
frozenConfig.features.push("sweep the leg");

/* -------------------------------------------------------------------------- */
/*                                  satisfies                                 */
/* -------------------------------------------------------------------------- */

// The satisfies operator checks that a value matches a target type 
// but does not widen or replace the value's inferred type.

// The satisfies operator validates that a value matches a specific type without changing its inferred type. 
// It bridges the gap between flexible type inference and strict type annotations.

const colorsTyped: ColorMap = {
  red: "#ff0000",
  green: "#00ff00",
  blue: 255,
  yellow: "#ffff00", // ERROR CAUGHT: Prevents the "yelow" typo
};

// DRAWBACK: This will ERROR now
// Property 'toFixed' does not exist on type 'string | number'.
colorsTyped.blue.toFixed();

const colorsSatisfies = {
  red: "#ff0000",
  green: "#00ff00",
  blue: 255,
  yellow: "#ffff00",
} satisfies ColorMap;

type ColorMap = {
  red: string | number;
  green: string | number;
  blue: string | number;
  yellow: string | number;
};

// This ensures it matches ColorMap but keeps the inferred types 
// (e.g., it knows blue is specifically a number).

// We keep the narrowed types!
type RedHexSatisfies = typeof colorsSatisfies.red;
const redUpper = colorsSatisfies.red.toUpperCase(); // "#FF0000"

// satisfies effectively gives you the best of both: 
// - it validates that the object matches the ColorMap contract (catching typos), 
// - but it remembers that blue was specifically a number.
