//===========================================
const csv61 = "1,2,3,4,5,6,7,8,9,10,11,12";

let array61 = [];
let rows61 = csv61.split(",");

const eleCnt = 3;
for (let i = 0; rows61.length > 0; i++) {
    array61[i] = rows61.slice(0, eleCnt);
    rows61.splice(0, eleCnt);
}
//===========================================
const csv62 = "1,2,3\n4,5,6\n7,8,9\n10,11,12";

let array62 = [];
let rows62 = csv62.split("\n");

for (let i = 0; i < rows62.length; i++) {
    array62[i] = rows62[i].split(",");
}
//===========================================
// 1:1でチェックして、一致することを確認する
for (let i = 0; i < 4; i++) {
    let tmp1 = JSON.stringify(array61[i]);
    let tmp2 = JSON.stringify(array62[i]);
    if (tmp1 === tmp2) {
        console.log("true");
    } else {
        console.log("false");
    }
}
//===========================================
