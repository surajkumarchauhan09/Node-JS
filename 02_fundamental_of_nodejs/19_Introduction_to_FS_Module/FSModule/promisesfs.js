import fs from "node:fs/promises";
//this module have only readFile method not readFileSync method
const a = await fs.readFile('./text.txt','utf-8')
console.log(a);

console.log('hello world');