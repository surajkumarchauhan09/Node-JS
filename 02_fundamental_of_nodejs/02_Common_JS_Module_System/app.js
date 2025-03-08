function sum(...num){
    return num.reduce((a,b) => a+b);
}
console.log(sum(1,2,3,4,5)); // 15

function product(...num){
    return num.reduce((a,b) => a*b);
}
console.log(product(1,2,3,4,5)); // 120

/* If different peace have different functionality, then it is better to create separate module for each peace. so we can create
separate module for sum and product. */