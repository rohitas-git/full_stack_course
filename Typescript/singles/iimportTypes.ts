// Importing Types

// import { User, Post } from "./models";

// it's much safer and more efficient to use the import type syntax:
// This way TypeScript knows that you're only importing types, 
// and it can drop the imports so they don't generate extra JavaScript code when your project is compiled. 
// import type { User, Post } from "./models";
// import { type User, type Post } from "./models";