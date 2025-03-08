function sum(...num) {
  return num.reduce((a, b) => a + b);
}
function product(...num) {
  return num.reduce((a, b) => a * b);
}

module.exports = { sum, product }; // Exporting sum and product functions to be used in other modules.

// module.exports = [sum, product]; // Exporting sum and product functions to be used in other modules.

/*you cannot return multiple values from a module. You can only return a single value. If you want to return multiple values,
you can return an array or an object containing multiple values.*/

// you can use array destructuring to destructure string because string is an an iterable object.
// const [a, b, c] = 'abc';
// console.log(a); // a