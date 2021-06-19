var csv4 = "1,2,3,4,,,7,8,9,10,11,12,";
console.log(csv4);
// 1,2,3,4,,,7,8,9,10,11,12,
var array4 = [];
var rows4 = csv4.split(",");
// 配列から抽出する要素数
var elementCount = 5;
for (var i = 0; rows4.length > 0; i++) {
    // 配列から指定した要素を取得
    array4[i] = rows4.slice(0, elementCount);
    // 配列から指定した要素を削除
    rows4.splice(0, elementCount);
}
console.log(array4);
// 1,2,3,4,,,7,8,9,10,11,12,
console.log(array4[0]);
// 1,2,3,4,
console.log(array4[1]);
// ,7,8,9,10
console.log(array4[2]);
// 11,12,
console.log(array4[1][0]);
