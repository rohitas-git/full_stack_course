
// moo.js
function moo(name){
    return `moo! ${name}`;
}

// Exporting using CommonJS syntax
module.exports = moo;

// the less preferred way of doing modules in JavaScript: CommonJS.
// CommonJS is a module system that was created for Node.js 
// before the new ES6 module syntax was introduced.

// CommonJS is Node.js specific, you can't use it in the browser without some kind of bundler,
// The module.exports object, which is used to export stuff
// The require function, which is used to import stuff