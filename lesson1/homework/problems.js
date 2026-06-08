// Problem 1
// Create variables for your favorite food, favorite color, and favorite number.
// Print them in 3 separate sentences.
let food = "Pizza"
let color = "Blue"
let number = 42
console.log("My favorite food is "+food)
console.log("My favorite color is "+color)
console.log("My favorite number is "+number)                

// Problem 2
// Create a variable for a number.
// Print whether it is positive, negative, or zero.
let num = -5
if (num > 0){
    console.log("The number is positive")
} else if (num < 0){
    console.log("The number is negative")
} else {
    console.log("The number is zero")
}

// Problem 3
// Create an array of 5 animals.
// Print the first animal, last animal, and length of the array.
let animals = ["Lion", "Tiger", "Bear", "Wolf", "Fox"]
console.log("First animal: " + animals[0])
console.log("Last animal: " + animals[animals.length - 1])
console.log("Length of array: " + animals.length)

// Problem 4
// Find the sum of all numbers in the array.
let numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log("Sum of numbers: " + sum)

// Problem 5
// Write a function that counts how many times "red" appears in an array.
function countRed(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "red") {
            count++
        }
    }
    return count
}
let colors = ["red", "blue", "red", "green", "red", "yellow"]
console.log("Number of times 'red' appears: " + countRed(colors))   