import {num} from "./num.mjs" //this is named import
import {add} from "./math" //this gives error because you have to use .js at the end
import add from "./math.js" //this is default import
import a,{num} from "./add.js" //you can also import named export and default export at the same time
console.log(num)
//If you are using es6 module then you have to set "type": "module" in package.json.
/*If you are using es6 module then you are not able to use function and methods of common js module like
 require,__dirname and __filename*/
/*The variable You have created in this es6 module that all goes into the module scope and in this module
system strict mode is enabled by default*/
/*You can give any fle extension you want in common js module but in es6 module you have limitation you
can only use .mjs and .js extension*/