// const timer = require('./timer');

//Common Js Modules
   //synchronous file loading
   //file extension optional
   //if we give full file path, we will load any file
   //it convention to add cjs extension
   //it is optional to set type: common in package.json because it is default
   //in cjs this keyword points to module.exports by default
   // cjs imports are hoisted
   //top level await is not allowed
   //only one value can be exported
   //strict mode is not enabled by default

//Es6 Modules
   //Asynchronous file loading
   //file extension required
   //we can not load any file only js and mjs file are allowed
   //it convention to add mjs extension
   //we have to set type: module in package.json
   //in es6 this keyword is undefined
   //mjs imports are hoisted
   //top level await is allowed
   //multiple values can be exported
   //strict mode is enabled by default