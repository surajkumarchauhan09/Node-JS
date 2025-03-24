/*due to module wrapper function in node.js, we access the module.exports object , require function , __filename , __dirname
and other objects and functions in the global scope of the module.*/

// Basics structure of module wrapper function
(function(exports, require, module, __filename, __dirname){
    // node js keeps the code inside this function and executes it
}) (module.exports, require, module, __filename, __dirname);