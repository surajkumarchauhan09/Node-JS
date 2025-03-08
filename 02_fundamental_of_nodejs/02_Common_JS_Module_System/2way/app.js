const {sum , product} = require('./math');
/*the return value of require() is module.exports of the module that you are requiring. If you are exporting multiple values from a module,
 you can destructure them while requiring the module.*/
// const [sum, product] = require('./math');
console.log(sum(1,2,3,4,5)); // 15
console.log(product(1,2,3,4,5)); // 120
// In this way, we can create separate modules for each functionality and export them to be used in other modules. This way, we can