

# Install Babel in your project directory to transpile modern JavaScript.
npm i -D @babel/core @babel/cli @babel/preset-env
# @babel/core – the main Babel package. It provides the core functionality for transpiling JavaScript.
# @babel/cli – a CLI that will let us run Babel.
# @babel/preset-env – a preset that automatically determines which JavaScript features need to be transpiled.

# Use Babel to transpile your main.js file to an older version of JavaScript:
npx babel main.js --out-file main.compiled.js

# To enable strict mode, you just need to "use strict" at the top of your file:
# "use strict";
# --- your file ---

# You can also enable strict mode for a single function:
# function strictFunction() {
#   "use strict";
# }

# Here's the best part: you only need "use strict"; 
# at the top of non-es6 modules. 
# ES6 modules are always in strict mode by default. 
# That goes for the browser and Node.js.

# ES6 modules use the import and export keywords instead of require and module.exports.