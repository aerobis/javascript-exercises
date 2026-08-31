const totalIntegers = function(input) {
    let sum = 0;
    if(typeof input == "number"){
        return Number.isInteger(input) ? 1 : 0;
    }

    if(typeof input !== "object" || input === null){
        return undefined;
    }

    const nestedValues = Object.values(input);
    nestedValues.forEach((nestedValue)=> {
        const result = totalIntegers(nestedValue);
        if(result !== undefined){
            sum += result;
        }
    });

    return sum;
};
  
// Do not edit below this line
module.exports = totalIntegers;
