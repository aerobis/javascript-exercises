let sumAll = function(lowerLimit, upperLimit){
    let sum = 0;
    //Checks
    if(lowerLimit < upperLimit){
        for(let i = lowerLimit; i <= upperLimit; i++){
            sum += i;
        }
    }
    
    
    
    if(upperLimit < lowerLimit){
        for(let i = upperLimit; i <= lowerLimit; i++){
            sum += i;
        }
    }
    
    
    console.log(sum);
    return sum;
}

sumAll(5,1)


// Do not edit below this line
module.exports = sumAll;