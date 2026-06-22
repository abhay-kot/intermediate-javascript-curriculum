let numbers = [];{
    numbers.push(1);
}
console.log(numbers);
let square = [];{
    for (let i = 1; i <= 5; i++) {
        square.push(i * i);
    }
}
console.log(square);
let scores = [57, 68, 72, 85, 90, 95, 100];
let passingscore = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 70) {
        passingscore.push(scores[i]);
    }
}
console.log(passingscore);
