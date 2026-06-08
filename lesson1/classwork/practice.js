// Problem 1
// Create variables for a student's name, age, and grade.
// Print a sentence using all 3 variables.
let na = "Abhay Nandan"
let ag = 9 
let gr = "3 grade"
console.log(na+ag+gr)

// Problem 2
// Create a variable for a score.
// Print "Excellent" if the score is at least 90, "Good" if it is at least 70, otherwise print "Practice more".
let s = 1000000
if (s >=90){
    console.log("Excellent")
}else if (s>69){
    console.log("Good")
}else{
   console.log("Practice more!!!!") 
}
// Problem 3
// Create an array of 5 numbers.
// Print every number using a for loop.
for(let i = 0;i>=5;i++){
    console.log(i)
}

// Problem 4
// Count how many numbers in the array are greater than 10.
let ar = [500,4]
for (let i = 0;i <ar.length;i++){
    if(ar[i] > 10){
        console.log(ar[i])
    }
}

// Problem 5
// Write a function that takes an array and returns the biggest number.
function big(arr){
    let big = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > big){
            big = arr[i]
        }
    }
    return big
}