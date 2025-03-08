function sum(...num){
    return num.reduce((a,b) => a+b);
}

module.exports = sum// Exporting sum function to be used in other modules.
// In this way, we can create separate modules for each functionality and export them to be used in other modules. This way, we can
