const min = (a, b) => {
    return (a < b) ? a : b;
};

console.log(min(15, 10));

const isEven = (n) => {
    if (n === 0) return true;
    else if (n === 1) return false;
    return isEven(Math.abs(n - 2));
};

console.log(isEven(-2));

const countChar = (string, char) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) count++;
    }
    return count;
};

console.log(countChar('kakkerlak', 'k'));