// console.log('Hello from math.js');
// console.log(send);
// send.a = 100;
send.sum = (...args) => args.reduce((a, b) => a + b, );
/*You are able to access the send object here because all code of this file is executed in wrapper function of app.js file.*/