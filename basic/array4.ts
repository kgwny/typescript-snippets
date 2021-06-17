let csv4 = "1,2,3,4,,,7,8,9,10,11,12,";

console.log(csv4);
// 1,2,3,4,,,7,8,9,10,11,12,

let array4 = [];
let rows4 = csv4.split(",");

const splitNum = 5;

for (let i = 0; rows4.length > 0; i++) {
    // 配列から指定した要素を取得
    array4[i] = rows4.slice(0, splitNum);
    // 配列から指定した要素を削除
    rows4.splice(0, splitNum);
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
