const permutations = function(input) {
    // Base case: empty array has one permutation (itself)
    if(input.length === 0) {
        return [[]];
    }

    let result = [];
    
    // Try each element in the array
    for(let i = 0; i < input.length; i++) {
        // Get the current element
        const currentElement = input[i];
        
        // Create a new array without this element
        const remaining = input.slice(0, i).concat(input.slice(i + 1));
        
        // Recursively get permutations of what's left
        const permsOfRemaining = permutations(remaining);
        
        // For each permutation of remaining, add current element to front
        permsOfRemaining.forEach(perm => {
            result.push([currentElement, ...perm]);
        });
    }
    
    return result;
};
  
// Do not edit below this line
module.exports = permutations;
