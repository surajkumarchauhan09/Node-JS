//Library Packages:- Library packages are packages that import and use in your code.
  //.bin may be created in your node_modules folder if the dependency of your library package is a CLI package.

import axios from "axios";
console.log(axios);

// CLI packages:- CLI packages are packages that are used to run commands in your terminal. e.g. vite
  //If you are installing cli packages there is a folder .bin is created in your node_modules folder.

//you can run vite directly by using "npx vite" command in your terminal to run vite.
//Or you can add vite in your package.json file in scripts.


//VITE
  //vite start server in your current directory. and search for index.html file.
  //we install vite as a dev dependency in our package.json file. by using "npm i -D vite" command.

// If you install any Library in global then you can use that library from any where in any folder 
//But if you install any Library in local then you can use that library only in that folder.
//If you install globally then you need not to use NPX command.

// If you install vite globally then you can run vite using any terminal except power shell. because power shell policy is restricted.
  //"Get-ExecutionPolicy" -this gives you execution policy of your power shell.
  //"Set-ExecutionPolicy Unrestricted -scope CurrentUser" -this is used to change the execution policy.
  