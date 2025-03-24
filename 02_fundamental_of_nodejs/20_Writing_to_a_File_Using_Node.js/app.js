import { writeFile, readFile , appendFile } from "node:fs/promises";
// import { writeFile } from 'node:fs';//this import gives error

// writeFile('text.txt', "Hello world");
// /*the above method replace the content of the file if it already exists or create a new file if it doesn't exist and
//  write the content to the file */

// fs.appendFile('text.txt', " World");
// /*the above method appends the content to the end of the file. It doesn't replace the content.
//  It will also create the file if it doesn't exist*/

// const containBuffer = await fs.readFile('nightcity.mp4')

// fs.writeFile("C:\\Users\\Suraj Kumar\\Desktop\\boot.mp4", containBuffer)//you can also write the file using buffer

// setInterval(() => {
//     writeFile("text.txt", new Date().toLocaleTimeString())
// }, 500)

try {
  const data = await readFile("textt.txt", "utf-8");
  console.log(data);
} catch (error) {
  appendFile(
    "error.log",
    `\n${new Date().toLocaleTimeString()}\n${error.message}\n${error.stack}`
  ); //this will write the error to error.log
  console.log(error);
  console.log("To see full error message check ./error.log file");
} //to prevent the code from breaking we use try and catch

//this all method is good for small files not for large files that is why we use streams
