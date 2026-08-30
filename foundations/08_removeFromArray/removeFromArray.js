const removeFromArray = function(array, ...args){
    let currentArg = [];
    for (let i = 0; i < args.length; i++){
        currentArg[0] = args[i];
        for(let j = array.length - 1; j >= 0; j--){
            if(currentArg[0] == array[j]){
                array.splice(j, 1);
            }
        }
    }
    console.log(array)
}

removeFromArray([1,2,3,4,5], 1, 2, 3, 5)

// Do not edit below this line
module.exports = removeFromArray;