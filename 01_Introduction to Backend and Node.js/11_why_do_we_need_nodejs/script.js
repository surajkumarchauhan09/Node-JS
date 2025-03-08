const fs = require('fs');
const {exec} = require('child_process');


fs.writeFileSync('./text.txt', 'Hello World!');// create a file and write to it

fs.renameSync('./text.txt', './new-text.txt');// rename a file

fs.unlinkSync("C:\\Users\\Suraj Kumar\\Desktop\\font.txt");// delete a file

exec('start chrome')// open chrome browser

exec('node')// open node.js terminal

exec('"C:\\Users\\Suraj Kumar\\AppData\\Local\\slack\\slack.exe"')// open slack

exec('taskkill /IM slack.exe /F');// close slack