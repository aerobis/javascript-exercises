function fibonacci(n) {
  if (n < 1){
    return "OOPS";
  }

  if (n === 1 || n === 2){
    return 1;
  }
  
  let prev = 1;
  let current = 1;
  
  for (let i = 3; i <= n; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }
  
  return current;
}

// Do not edit below this line
module.exports = fibonacci;
