// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//SyntaxError: await is only valid in async functions and the top level bodies of modules
// the above error comes because you are not using async function in cjs 
//in mjs you need not to use async function

(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response);
})();

console.log("Running index");
// import timer from './timer.js';
const timer = require("./timer");

// module.exports.num = 1;
// module.exports.user = {name: 'shamim', age: 23};
// console.log(this);

//exports !== export
//module.exports !== export default