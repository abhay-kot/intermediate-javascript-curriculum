// Problem 1
// Print the numbers from 10 down to 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Problem 2
// Print every third number from 0 to 30.
for (let i = 0; i <= 30; i += 3) {
    console.log(i);
}

// Problem 3
// Build an array of the first 8 square numbers.
let squares = [];
for (let i = 1; i <= 8; i++) {
    squares.push(i * i);
}
console.log(squares);


// Problem 4
// Print every item in a 2D array.
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        console.log(array2D[i][j]);
    }
}

// Problem 5
// Count how many numbers in a 2D array are greater than 10.
let count = 0;
for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        if (array2D[i][j] > 10) {
            count++;
        }
    }
}
console.log(count);
