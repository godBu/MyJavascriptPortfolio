const squareNumber = (number) => {
    return Number.isInteger(Math.sqrt(number));
}

console.log(squareNumber(50));

// const squareNumber = (number) => {
//     for (i = 1; i*i <= number; i++){
//         if (i*i == number)
//         return true;
//     }
//     return false;
// }

// console.log(squareNumber(400));

// Number an abject that represents number of any kind
// isInteger returns true if the value passed is an integer
// Math lets us use certain math constants and carry out certain maths functions 
// returns the square root of a number  