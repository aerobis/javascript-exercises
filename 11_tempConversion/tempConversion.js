let convertToCelsius = function(fahrenheit){
    // C = (F-32) * 5/9
    let celsius = (fahrenheit - 32) * (5/9);
    return Math.round(celsius * 10)/10
}

let convertToFahrenheit = function(celsius){
    // C = (F-32) * 5/9
    // (C * 9/5) + 32 = F
    let fahrenheit = (celsius * (9/5)) + 32
    return Math.round(fahrenheit * 10)/10
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
