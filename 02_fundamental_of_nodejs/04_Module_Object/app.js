const math = require('./math.js');
console.log(module); // module object
//In the module object, there is many properties and methods that we can use to interact with the module system.
//some of the properties are:
// __dirname : It represents the name of the directory that the currently executing script resides in.
// __filename : It represents the filename of the code being executed.

// these properties we have already seen in the previously.
// exports : It is used to export any thing from the module to other modules.
// require() : It is used to import modules from other modules.

//module: this is a reference to the current module. in this you get the information about imported and exported modules.
// in module there is a children property which is an array of the modules that you have imported.
// isPreloading property is used to check whether the module is preloading or not.you can use following command to preload the module.
// node --require ./math.js app.js
//you can also add following code in launch.json file to preload the module.
// "runtimeArgs": ["--require", "./math.js"],
// loaded property is used to check whether the module is loaded or not. it returns true if the module is loaded otherwise false.
// parent property is used to get the parent module of the current module.
//path property is used to get the path of the current module.
//Paths property is used to get the paths that are used to search for the modules.
//filename property is used to get the filename of the current module.
a = 6;// this is a global variable. you cannot declare variable like that if you are using strict mode.
