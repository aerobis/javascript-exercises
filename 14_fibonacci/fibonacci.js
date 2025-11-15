const fibonacci = function(index) {
    if(index == 1){
        return 1;
    }else if(index == 2){
        return 1;
    }

    return fibonacci(index-1) + fibonacci(index-2);
};

// Do not edit below this line
module.exports = fibonacci;
