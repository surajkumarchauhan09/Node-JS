const b = require('./math.js')
//since the following code runs inside the module wrapper function,so the scope variable is local scope.
const a = 5;
console.log(a);
//If you do not use let, const or var to declare a variable, it will be a global variable.
//If you are using strict mode, it enable strict mode in module wrapper function. not in global scope.

//whatever you are importing using require function, that all code is executed in module wrapper function.