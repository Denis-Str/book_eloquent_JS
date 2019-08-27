let arrays = [[1, 2, 3], [4, 5], [6]];

console.log( arrays.reduce((preValue, currValue) => preValue.concat(currValue)) );
// → [1, 2, 3, 4, 5, 6]