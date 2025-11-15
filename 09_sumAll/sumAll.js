const sumAll = function(num1, num2) {
    if(num1 > num2){
        let difference = num1 - num2;
        let sum = 0;
        for(let i = 0; i <= differnece; i++){
            sum += (num2 + i);
        }
        return sum;
    }else if (num2 > num1){
        let difference = num2 - num1;
        let sum = 0;
        for(let i = 0; i <= difference; i++){
            sum += (num1 + i);
        }
        return sum;
    }else if (num1 === num2){
        return num1 + num2;
    }
};

// Do not edit below this line
module.exports = sumAll;
