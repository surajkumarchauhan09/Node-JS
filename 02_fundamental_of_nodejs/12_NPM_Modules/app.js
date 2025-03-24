// import {num} from "maths";
const {num} = require("maths"); //this is search inside node_modules

console.log(num);

//the module inside node_modules folder is called npm module
//Inside package.json of node_modules folder//
  // "main": "maths.cjs" //this is defining the main file inside node_modules
  // "module": "maths.mjs" //this is defining the module file inside node_modules
  // "exports": { "import": "./maths.mjs", "require": "./maths.cjs" } 
  //this is defining the export file when you import from node_modules 