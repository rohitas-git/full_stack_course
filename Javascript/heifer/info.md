# Javascript Development Setup

## Babel Setup
Install Babel in your project directory to transpile modern JavaScript.

```bash
npm i -D @babel/core @babel/cli @babel/preset-env
```

- **@babel/core** – the main Babel package. It provides the core functionality for transpiling JavaScript.
- **@babel/cli** – a CLI that will let us run Babel.
- **@babel/preset-env** – a preset that automatically determines which JavaScript features need to be transpiled.

Use Babel to transpile your `main.js` file to an older version of JavaScript:

```bash
npx babel main.js --out-file main.compiled.js
```

## Strict Mode
To enable strict mode, you just need to add `"use strict";` at the top of your file:

```javascript
"use strict";
// --- your file ---
```

You can also enable strict mode for a single function:

```javascript
function strictFunction() {
  "use strict";
}
```

**Here's the best part:** you only need `"use strict";` at the top of non-ES6 modules. ES6 modules are always in strict mode by default. This applies to both the browser and Node.js.

## ES6 Modules
ES6 modules use the `import` and `export` keywords instead of `require` and `module.exports`.
ES6 modules are the preferred way of doing modules in JavaScript. They're (now) built into the language and are supported in modern browsers and Node.js.

### Node.js
By default, Node.js uses the CommonJS syntax for modules. There are two ways you can manually switch to ES6 module syntax:
1. Add `"type": "module"` to your `package.json` file.
2. Rename your module files to `.mjs` instead of `.js`.

### Browser Modules
Modern browsers now support ES6 modules, but there are a few things to be aware of. If your HTML has "normal" old script tags, those scripts will not be treated as modules. They will execute one after the other, in the order they appear in the HTML file.

```html
<script src="meFirst.js"></script>
<script src="meSecond.js"></script>
```

If you want to use ES6 modules, you need to use the `type="module"` attribute on your script tags.

```html
<script type="module" src="math.js"></script>
<script type="module" src="main.js"></script>
```

Modules have a few great advantages:
- Stuff defined in a module is not in the global scope. To be accessed from another module, it must be exported.
- Modules are deferred by default, meaning they only run after the document has been parsed.
- Strict mode is enabled by default. Yay!

## Default exports
Default exports are often used when you want to export a single value from a module.

Honestly... I kinda hate them. What if I want to export more things later? Now I have to refactor all of my imports and exports. It's a pain.

My personal preference is to just pretend default exports don't exist, and always use named exports.