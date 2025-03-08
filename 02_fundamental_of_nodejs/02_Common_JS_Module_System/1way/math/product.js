function product(...num){
    return num.reduce((a,b) => a*b);
}
console.log(module.exports); // {}

module.exports = product; // Exporting product function to be used in other modules.
// In this way, we can create separate modules for each functionality and export them to be used in other modules. This way, we can

// module.exports.product = product; // Exporting product function to be used in other modules.

//module.exports is a by default object that is present in every JS file. basically it is an empty object. You can add properties to it