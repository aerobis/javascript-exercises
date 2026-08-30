function checkPalindrome(str){
  let strArray = str.split("");
  let arrayLength = strArray.length;
  let checkableArray = [];
  
  for(let i = 0; i < arrayLength; i++){
    let poppedElement = strArray.pop();
    if(poppedElement != " " && poppedElement != "."){
      checkableArray.unshift(poppedElement);
    }
  }
  
  let originalString = checkableArray.join("");
  let checkableArrayLength = checkableArray.length;
  
  let reversedArray = [];
  
  for(let i = 0; i < checkableArrayLength; i++ ){
    let poppedElement = checkableArray.pop();
    if(poppedElement != " " && poppedElement != "."){
      reversedArray.push(poppedElement);
    }
  }
  
  let reversedString = reversedArray.join("");
  
  if(originalString.toLowerCase() === reversedString.toLowerCase()){
    return true;
  }else{
    return false;
  }
  
}

let result = checkPalindrome(" A nut for a jar of tuna.");
console.log(result)

// racecar


// Do not edit below this line
module.exports = palindromes;
