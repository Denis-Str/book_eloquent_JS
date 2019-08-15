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
    let list = {
        value : this.value,
        rest : null
    };
    const iter = (count, acc) => {
        if (count === arr.length) {
            return acc
        }
        return iter(count + 1, {
            value : arr[count],
            rest : acc
        })
    };
    return iter(0, list);
};

console.log(arrayToList([10, 20]));

// let list = {
//     value : 1,
//     rest : {
//         value : 2,
//         rest : null
//     }
// };
// console.log(list);