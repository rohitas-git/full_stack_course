"use strict";
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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPreferences = exports.BIOMETRIC_LOCK = exports.TWO_FACTOR = void 0;
exports.getFileLength = getFileLength;
exports.isSecure = isSecure;
function logSaiyan(saiyan) {
    console.log("".concat(saiyan.name, " has power level: ").concat(saiyan.power, "!"));
    // ...
}
// Extra properties are allowed when you pass an object that has at least the required properties.
// However, if you use an object literal directly, TypeScript will check for excess properties and throw an error if there are any.
var falcon = {
    name: "Millennium Falcon",
    speed: 75,
    weapons: 4,
};
function pilot(ship) {
    console.log("Piloting ".concat(ship.name, " at ").concat(ship.speed, " light-years per hour"));
}
// this is fine
pilot(falcon);
// Behavior of empty object type:
// 1. It accepts almost anything
// 2. It does not allow any properties when using object literals directly (You cannot access properties)
// 3. Why we avoid it for data structures: It does not provide any type safety or structure, so it's not useful for defining data structures. It can lead to bugs and confusion because it allows any value without any constraints.
var empty = {}; // This is fine
// const notEmpty: EmptyObject = { name: "Not Empty" };
// Error: Object literal may only specify known properties, and 'name' does not exist in type '{}'.
var newUser = {};
newUser = falcon; //This is valid!
newUser = "Goku"; // Can't access properties of string, but it's still valid because {} can accept any value.
// You can reassign the variable, which initially held an empty object to a string.
// In fact, you can reassign it to anything except null or undefined because everything else is technically an object in JS
// This is fine because the type of newUser is {} which can be assigned any value, including a string.
var anotherUser = "Lane";
function isCorrect(lesson) {
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
var justiceLeague = new Set();
justiceLeague.add("Green Arrow");
justiceLeague.add("Flash");
justiceLeague.delete("Flash");
justiceLeague.forEach(function (member) { return console.log(member); });
justiceLeague.has("Green Arrow"); // true
justiceLeague.has("Flash"); // false
justiceLeague.size; // 1
// Error: Argument of type '2' is not assignable to parameter of type 'string'
// justiceLeague.add(2);
// A Set automatically removes duplicate values from an array
var names = ["plasticman", "firestorm", "plasticman"];
var justiceLeague2 = new Set(names);
console.log(justiceLeague2);
// Set { 'plasticman', 'firestorm' }
/* -------------------------------------------------------------------------- */
/*                                     Map                                    */
/* -------------------------------------------------------------------------- */
// Map is a collection of key-value pairs where the keys can be of any type, and the values can also be of any type.
// In TypeScript, you can use the built-in Map class to create a map of any key and value types.
var heroPowers = new Map();
heroPowers.set("Superman", 100);
heroPowers.set("Batman", 85);
heroPowers.set("Wonder Woman", 90);
heroPowers.get("Superman"); // 100
heroPowers.has("Batman"); // true
heroPowers.delete("Batman");
heroPowers.has("Batman"); // false
heroPowers.size; // 1
for (var _i = 0, heroPowers_1 = heroPowers; _i < heroPowers_1.length; _i++) {
    var _c = heroPowers_1[_i], hero = _c[0], power = _c[1];
    console.log("".concat(hero, " has power level ").concat(power));
}
function getFileLength(files, filename) {
    if (files.has(filename)) {
        var fileContent = files.get(filename);
        var textEncoder = new TextEncoder();
        var encoded = textEncoder.encode(fileContent);
        return encoded.length;
    }
    return 0;
}
// keys are strings and values are numbers, but we don't know the specific keys in advance.
var metrics = {
    wordsPerMinute: 50,
    errors: 2,
    timeOnPage: 120,
};
metrics["refreshRate"] = 60; // OK
var janesServer = (_a = {
        name: "Jane's Server",
        1: 420
    },
    _a[Symbol("role")] = "Admin",
    _a);
// What is a symbol in TypeScript?
// A symbol is a primitive data type that represents a unique identifier. 
// It is created using the Symbol() function and can be used as a key for object properties. 
// Each symbol is guaranteed to be unique, even if they have the same description. 
// This makes symbols useful for creating private properties on objects, as they cannot be accessed using dot notation and are not enumerable in for...in loops.
// A symbol is a unique and immutable data type that may be used as an object property name. 
// It's kinda like a string, but it's guaranteed to be unique.
// To read or write a symbol-keyed property, 
// use the symbol itself with bracket notation. Dot notation won't work.
var ROLE = Symbol("role");
var user = (_b = {}, _b[ROLE] = "Admin", _b);
user[ROLE]; // "Admin"
// user.ROLE; // undefined
exports.TWO_FACTOR = Symbol("twoFactor");
exports.BIOMETRIC_LOCK = Symbol("biometricLock");
function isSecure(preferences) {
    var security = preferences[exports.TWO_FACTOR] || preferences[exports.BIOMETRIC_LOCK];
    return security;
}
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
exports.defaultPreferences = Object.freeze({
    name: "Kreese",
    doNotDisturb: false,
    outOfOffice: false,
});
// example of compile-time immutability with "as const" but runtime mutability without Object.freeze
var userSettings = {
    theme: "dark",
    notifications: true,
};
// userSettings.theme = "light"; // Error: Cannot assign to 'theme' because it is a read-only property.
// However, at runtime, you can still modify the object if you don't use Object.freeze
userSettings["theme"] = "light"; // This will work at runtime, but it will not change the type of userSettings.theme which is still "dark" due to "as const".
console.log(userSettings.theme); // Output: "light"
// runtime immutability with Object.freeze but no compile-time immutability without "as const"
var appSettings = Object.freeze({
    theme: "dark",
    notifications: true,
});
console.log(appSettings.theme); // Output: "dark"
appSettings.theme = "light"; // Error at runtime: Cannot assign to read only property 'theme' of object '#<Object>'
