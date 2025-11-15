const palindromes = function (string) {
    let reverse = '';
    let originalString = string;

    for(let i = string.length - 1; i >= 0; i--){
        reverse += string[i];
    }

    if(reverse === originalString){
        return true;
    }else{
        return false;
    }
};

// racecar


// Do not edit below this line
module.exports = palindromes;
