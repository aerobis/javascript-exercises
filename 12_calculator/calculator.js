const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for(let i = 0; i < array.length; i++){
    sum += (array[i]);
  }
  return sum;
};

const multiply = function(array) {
  let multiply = 0;
  for (let i = 0; i < array.length; i++){
    multiply *= (array[i]);
  }
  return multiply;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(num) {
  let result;

	if (num == 0){
    return 1;
  }
  if (num == 1){
    return 1;
  }
  if (num == 2){
    return 2;
  }

  while (num != 0){
    result = num * num - 1;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
