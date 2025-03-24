//You can put command in scripts in package.json give it a name and run using npm run name
  //like npm run hi
  //start is a default command in package.json file run using npm start
  //test is a default command in package.json file run using npm test
  //restart is a default command in package.json file run using npm restart
  //stop is a default command in package.json file run using npm stop
  //dev is a default command in package.json file run using npm run dev

//dependencies :- these are the packages on which our project depends on
  //npm i express

//devDependencies :- the package which are use in only in development purposes and not in production like "npm i nodemon"
  //npm i axios -D :-if you are installing like this then it will install in devDependencies

//node --watch app.js :- this is use to run app.js file in watch mode
  console.log("hi, how are you?");

//semantic versioning :- this is use to give version to our project
  //1.0.0
  //1.0.1 :-this patch update
  //1.1.0 :-this minor update
  //2.0.0 :-this major update
  //^2.0.0 :-the caret symbol is use to say increase the minor and patch version automatically 
  //^0.1.5 :- here caret symbol increase the patch version only because this is a zero version
  //"*" :-this is use to increase all updates automatically
  //~2.0.0 :-tilde symbol can increase only patch version
  //>2.0.0 :- greater than symbol means install version greater than 2.0.0
  //<2.0.0 :- less than symbol means install version less than 2.0.0
  //>=2.0.0 :- greater than or equal to symbol means install version greater than or equal to 2.0.0
  //<=2.0.0 :- less than or equal to symbol means install version less than or equal to 2.0.0

//.gitignore :- this is use to ignore files in our project like
  //node_modules

//package-lock.json :- this is use to lock the versions of our dependencies of our project

