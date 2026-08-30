const factorial = function(num) {
    if(typeof num !=  "number" || Number.isNaN(num) || num % 1 != 0 || num < 0){
        return undefined;
    }

    if(num == 0 || num == 1){
        return 1;
    }

    return num * factorial( num - 1 );
};

// Do not edit below this line
module.exports = factorial;