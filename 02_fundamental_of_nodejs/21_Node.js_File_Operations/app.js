// all these method you see. you can read in node docs in File System Module
import { watch } from "fs";
import {
  rename,
  copyFile,
  cp,
  unlink,
  rmdir,
  rm,
  writeFile,
  appendFile,
  mkdir,
  stat,
  readFile,
} from "fs/promises";

// rename("app.js", "index.mjs");//this will rename the file from app.js to index.mjs

// copyFile("index.mjs", "app.js");//this will copy the file from index.mjs to app.js

// cp("src","C:\\Users\\Suraj Kumar\\Desktop\\src",{recursive:true});

//you can move file using rename

// unlink("./src/index.mjs");//this will delete the file

// rmdir("./src");//this will delete empty folder

// rm("./src", {recursive:true});//this will delete non-empty folder

// rm("./src/node.js");//this will delete file as well

// writeFile("./src/index.mjs", "");//you can create file using writeFile

// appendFile("./src/index.mjs", "");//you can create file using appendFile as well

// mkdir("./test");//this will create folder

// const stats = await stat("app.js")//this will return file or folder stats
// console.log(stats)

watch("./text.txt", async (event, filename) => {
  if (event === "change") {
    let data = await readFile("./text.txt", "utf-8")
    console.log(data);
  }
});//this will fire event when file is changed , deleted , renamed