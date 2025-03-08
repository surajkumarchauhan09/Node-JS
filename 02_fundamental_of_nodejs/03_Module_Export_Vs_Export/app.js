const { sum, product } = require("./math");
const math = require("./math");

console.log(math);

// console.log(sum, product);

console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3, 4));

const user = {
  name: "Anurag Singh",
  age: 88,
  address: {
    city: "NYC",
    state: "Uttar Pradesh",
  },
  hobbies: ["Teaching", "Coding", "TT"],
};

let address = user.address;

// console.log(user.address === address);

// address.pinCode = 568737;
// address.country = "India"; //this will change the original object
//following will create a new object because are assigning a completely new object to address variable
address = {
  pinCode: 568737,
  country: "India",
};// new object

// console.log(address);
// console.log(user.address);
