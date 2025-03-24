import fs from 'node:fs';
// console.log(fs);//fs is a type of object which has a lot of methods and properties

// let data = fs.readFileSync('./text.txt','utf-8');//this will return a buffer
/* in the above line utf-8 is a encoding if you pass utf-8 then it will return a string so you need not to use toString method
use bellow line*/

// console.log(data.toString());//to convert buffer to string we use toString

// console.log(data);
//readFileSync is a synchronous method it block the main thread of javaScript


fs.readFile('./text.txt','utf-8',(err,data)=>{
    console.log(data);
})//this is an asynchronous method it does not block the main thread

console.log('hello world');