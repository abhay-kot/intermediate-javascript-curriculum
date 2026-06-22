for (let i = 0; i <3; i++) {
    for (let j = 0; j < 4; j++) {
        console.log("row",i,"column",j);
    }
}
for (let i = 0; i <3; i++) {
    let row = "";
    for (let j = 0; j < 4; j++) {
        row += "x ";
    }
    console.log(row);
}       
let numbers = [[1,2,3],
          [4,5,6],
          [7,8,9]];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(numbers[i][j]);
    }
}
