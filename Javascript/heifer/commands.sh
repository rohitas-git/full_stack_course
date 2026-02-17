

# Install Babel in your project directory to transpile modern JavaScript.
npm i -D @babel/core @babel/cli @babel/preset-env
# @babel/core – the main Babel package. It provides the core functionality for transpiling JavaScript.
# @babel/cli – a CLI that will let us run Babel.
# @babel/preset-env – a preset that automatically determines which JavaScript features need to be transpiled.

# Use Babel to transpile your main.js file to an older version of JavaScript:
npx babel main.js --out-file main.compiled.js
