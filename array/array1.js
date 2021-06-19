var csv1 = "1,2,3,4,5,6,7,8,9,10";
console.log(csv1);
// 1,2,3,4,5,6,7,8,9,10
var array1 = [];
var rows1 = csv1.split(",", 3);
console.log(rows1);
for (var i = 0; i < rows1.length; i++) {
    array1[i] = rows1[i].split(",");
}
console.log(array1);
console.log(array1[0]);
