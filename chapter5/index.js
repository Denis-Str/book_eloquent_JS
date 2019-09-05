let arrays = [[1, 2, 3], [4, 5], [6]];

console.log( arrays.reduce((preValue, currValue) => preValue.concat(currValue)) );
// → [1, 2, 3, 4, 5, 6]

const loop = (value, condition, iter, func) => {
    const innerLoop = (i) => {
        if (!condition(i)) return false;
        func(i);
        return innerLoop(iter(i))
    };
    return innerLoop(value)

    // for (let start = value; condition(start); start = iter(start)) {
    //     func(start);
    // }
};

loop(3, n => n > 0, n => n - 1, console.log);

const every = (array, test) => {
   for (let value of array) {
       if (!test(value)) return false;
   }
   return true
};

console.log(every([1, 3, 5], n => n < 10));
// // → true
console.log(every([2, 4, 16], n => n < 10));
// // → false
console.log(every([], n => n < 10));
// // → true