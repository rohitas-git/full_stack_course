/**********
 * ARRAYS *
 **********/

// The most common way to declare an array is using the bracket notation,
//  string[], number[], etc.:

// Using bracket notation
function assignLightsaberColors(name: string, colors: string[]): void {
  // ...
}
// Using generic type parameter syntax (Type Parameters)
function assignLightsaberColors2(name: string, colors: Array<string>): void {
  // ...
}

const colors: string[] = ["blue", "green"];
const midichlorianCounts: Array<number> = [1000, 5000, 12000];

// ------------------- Heterogeneous Arrays -------------------
// TypeScript infers the type as (string | number)[]
let lightsaberStyles = [1, 2, "double", "shoto"];

// ------------------- Evolving ANY -------------------
let inventory: any[] = [];
// inventory: any[] or never[] depending tsconfig settings
inventory.push(42);
// inventory: number[]
inventory.push("robe");
// inventory: (number | string)[]

// The "evolving any" is a special type inference feature.
// It's not very useful if you're trying to restrict what can be
// pushed into an array within the initial scope, but it is useful outside of that scope

function getConfig() {
  let config = [];
  // config: any[]
  config.push("api-key");
  // config: string[]
  config.push(8080);
  // config: (string | number)[]
  return config;
}

let config = getConfig();
// config: (string | number)[]

config.push(false);
// Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// Now I get an error! 
// 
// The evolving any stops evolving when it's passed around.