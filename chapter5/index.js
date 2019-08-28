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