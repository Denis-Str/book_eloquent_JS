const buildTriangle = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += '#';
        console.log(result);
    }
};
buildTriangle(7);

const fizzBuzz = (start, finish) => {
    for (let i = start; i <= finish; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i +' FizzBuzz')
        } else if (i % 3 === 0) {
            console.log(i + ' Fizz')
        } else if (i % 5 === 0) {
            console.log(i + ' Buzz')
        }
    }
};

fizzBuzz(1, 20);

const chessboard = (n) => {
    let strOne = ' ';
    let strTwo = '#';
    let board = '';
    for (let i = 0; strOne.length < n; i++) {
        strOne[i] === ' ' ? strOne += '#' : strOne += ' ';
        strTwo[i] === '#' ? strTwo += ' ' : strTwo += '#';
    }
   for (let i = 0; i < n / 2; i++) {
       board += strOne + '\n' + strTwo + '\n';
   }
   return board
};

console.log(chessboard(8));