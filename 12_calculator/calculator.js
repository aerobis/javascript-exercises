function add(num1, num2){
  return num1+num2;
}

function subtract(num1, num2){
  return num1-num2;
}

function sum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

function multiply(arr){
  let product = 1;
  for(let i = 0; i<arr.length; i++){
    product *= arr[i];
  }
  return product;
}

function power(base, exponent){
  let result = 1;
  for(let i = 1; i <= exponent; i++){
    result *= base;
  }
  return result;
}

function factorial(num){
  if(num == 0){
    return 1;
  }

  if (num == 1){
    return 1;
  }

  if(num == 2){
    return 2;
  }

  return num * factorial(num-1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
