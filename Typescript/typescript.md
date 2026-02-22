
## What is it?
TypeScript is a language; tsc is the official compiler that type-checks and compiles TS to JS.


## How it works?
TS isn’t run natively; it’s always compiled to JavaScript first.


## Why use it?
* Catch mistakes early – Typos, wrong argument types, and missing properties are reported at compile time instead of at runtime.
* Better tooling – Editors can offer autocomplete, go-to-definition, and refactoring based on types.
* Clearer code – Types act as documentation and make APIs easier to understand and change safely.

## Views

So it’s “like a linter” in one sense and “more than a linter” in others.

Where the “linter” analogy fits
* TypeScript’s main day-to-day value is static analysis: catching type errors, typos, wrong arity, wrong property names, etc., before execution. In that sense it’s “linter-like”: it analyzes source code and reports problems.

Where the analogy is limiting
* Language, not just a tool over JS
* Semantics and refactors
* Design-time contract
* Ecosystem