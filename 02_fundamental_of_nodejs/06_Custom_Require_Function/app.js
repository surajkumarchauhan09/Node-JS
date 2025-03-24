const b = loadModule("./math.js");
function loadModule(path) {
  const fs = require("fs");
  const vm = require("vm");
  const fileContain = fs.readFileSync(path).toString();
  // console.log(fileContain);
  //Module wrapper function
  return (function (send) {
    vm.runInNewContext(fileContain , { send , loadModule , console });
    // vm.runInThisContext(fileContain); //runInThisContext is used to execute the code which are in string format

    // eval(fileContain); //eval is used to execute the code which are in string format
    return send;
  })({});
}
//vm.runInThisContext run the code in the global context
//eval run the code in the local context
