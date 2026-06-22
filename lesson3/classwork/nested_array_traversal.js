let groups =[["Alice", "Bob", "Charlie"],
              ["David", "Eve", "Frank"],
              ["Grace", "Heidi", "Ivan", "Judy", "Karl,", "Leo", "Mallory", "Nina", "Oscar", "Peggy", "Quentin", "Rupert", "Sybil", "Trent", "Uma", "Victor", "Walter", "Xavier", "Yvonne", "Zara"]];
console.log(groups);

console.log(groups[0]);
console.log(groups[0][1]);

for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < groups[i].length; j++) {
        console.log(groups[i][j]);
    }
}