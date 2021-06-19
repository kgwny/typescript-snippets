let csv1 = "1,2,3,4,5,6,7,8,9,10";

console.log(csv1);
// 1,2,3,4,5,6,7,8,9,10

let array1 = [];
let rows1 = csv1.split(",");

console.log(rows1);
// 1,2,3

for (let i = 0; i < rows1.length; i++) {
    array1[i] = rows1[i].split(",");
}

console.log(array1);
// 1,2,3

console.log(array1[0]);
// 1
