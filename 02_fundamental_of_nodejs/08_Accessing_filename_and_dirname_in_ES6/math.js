export const num = 1;
import.meta.a= "suraj"; //you can add your property in import.meta object.
const {filename , dirname, a} = import.meta;

console.log(filename , dirname , a);//Here import.meta is an object this is accessable only inside es6 modules in nodejs and browsers both

/*borwser and javascript added two things in import.meta object one is url and another is resolve function
filename and dirname is added by nodejs*/
process.chdir("./src");//this is change current working directory
console.log(Process.cwd());//this is also print current working directory