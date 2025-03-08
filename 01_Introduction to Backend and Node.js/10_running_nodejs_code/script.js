const fs = require('fs');


const text = fs.readFileSync('./text.txt')
console.log(text) //This will print the buffer object
console.log(text.toString()) //This will print the text in the file

const fileOnDesktop = fs.readFileSync("C:\\Users\\Suraj Kumar\\Desktop\\font.txt")//You can use double backslash or single forward slash
console.log(fileOnDesktop.toString()) //This will print the text in the file

console.log(global) //This will print the global object
console.log(globalThis) //This will print the global object

