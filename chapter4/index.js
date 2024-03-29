const range = (start, end, step = 1) => {
    let arr = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
};

const sum = (arr) => {
    let result = 0;
      for (let value of arr) {
          result += value
      }
      return  result;
};

// console.log(sum(range(5, 2, -1)));

const reverseArray = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i --) {
        newArr.push(arr[i])
    }
    return newArr;
};

// console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];

const reverseArrayInPlace = (arr) => {
    let newArr = [];
    let end = arr.length;
    for (let i = 0; i < end; i++) {
        let value = arr.pop();
        newArr.push(value);
    }
    for (let i = 0; i < end; i++) {
        arr.push(newArr[i])
    }
    return arr;
};

reverseArrayInPlace(arrayValue);

// console.log(arrayValue);

const arrayToList = (arr) => {
    let list = null;
    const loop = (i, list) => {
        if (i < 0) return list;
        return loop(i - 1, {
            value : arr[i],
            rest : list
        })
    };
    return loop(arr.length - 1, list);
};

const listToArray = (obj) => {
    let arr = [];
    const loop = (obj) => {
        arr.push(obj.value);
        if (obj.rest === null) return arr;
        return loop(obj.rest)
    };
    return loop(obj)
};

const prepend = (value, node) => {
     return {
         value,
         rest: node
     }
};

const nth = (node, index) => {
    const loop = (obj, i) => {
        if (i === index) return obj.value;
        if (obj.rest === null) return undefined;
        return loop(obj.rest, i + 1)
    };
    return loop(node, 0)
};

let obj = {here: {is: "an"}, object: 2};

const deepEqual = (obj1, obj2) => {
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    if ( obj1 === obj2) return true;
    if (typeof obj1 !== typeof obj2 && obj1 !== null && obj2 !== null) return false;
    if (key1.length !== key2.length) return false;

    for (let key of key1) {
        if (!key2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
};

// function arrayToList(array) {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//         list = {value: array[i], rest: list};
//     }
//     return list;
// }
// function listToArray(list) {
//     let array = [];
//     for (let node = list; node; node = node.rest) {
//         array.push(node.value);
//     }
//     return array;
// }

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(10, arrayToList([20])));
console.log(nth(arrayToList([10, 20, 30]), 2));
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
