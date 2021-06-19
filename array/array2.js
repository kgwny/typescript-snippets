var csv2 = "1,2,3\n4,5,6\n7,8,9\n10";
console.log(csv2);
// 1,2,3
// 4,5,6
// 7,8,9
// 10
var array2 = [];
var rows2 = csv2.split("\n");
console.log(rows2);
// 1,2,3,4,5,6,7,8,9,10
for (var i = 0; i < rows2.length; i++) {
    array2[i] = rows2[i].split(",");
}
console.log(array2);
// 1,2,3,4,5,6,7,8,9,10
console.log(array2[0]);
// 1,2,3
console.log(array2[0][1]);
console.log(array2[1]);
// 4,5,6
console.log(array2[2]);
// 7,8,9
console.log(array2[3]);
// 10
