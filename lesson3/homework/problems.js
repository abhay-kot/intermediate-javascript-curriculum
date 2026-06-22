// Problem 1
// Print all odd numbers from 1 to 19.
for (let i = 1; i < 20; i += 2) {
    console.log(i);
}

// Problem 2
// Print a triangle of stars with 5 rows.
let triangle = "";
for (let i = 1; i <= 5; i++) {
    triangle += "*";
    console.log(triangle);
}

// Problem 3
// Build an array with the numbers 5, 10, 15, 20, 25.

let numbers = [5, 10, 15, 20, 25];
console.log(numbers);

// Problem 4
// Find the sum of all numbers in a 2D array.
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let sum = 0;
for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        sum += array2D[i][j];
    }
}
console.log(sum);

// Problem 5
// Build a new array with only numbers less than 50.
let numbersLessThan50 = [];
for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        if (array2D[i][j] < 50) {
            numbersLessThan50.push(array2D[i][j]);
        }
    }
}
console.log(numbersLessThan50);
