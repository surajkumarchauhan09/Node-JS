//vm.runInThisContext run the code in the global context
//eval run the code in the local context
const vm = require("vm");
var num = 100;
// vm.runInThisContext('console.log(num)'); //this give error because num is not defined in the global context
vm.runInNewContext("console.log(num)", { num , console} ); //this will work because here you are giving access to num variable in the global scope

