const reverseString = function(string) {
    let reversed = '';
    let letterArray = string.split("");
    let reversedArray = [];
    for (let i = letterArray.length - 1; i >= 0; i--){
        let currentLetter = letterArray.pop();
        reversedArray.push(currentLetter)
    }
    reversed = reversedArray.join("");
    
    console.log(reversed)
};

reverseString('Hello, World!');

// Do not edit below this line
module.exports = reverseString;
