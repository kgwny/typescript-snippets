//===========================================
const csv71 = "4,5,6,13,14,15";

let array71 = [];
let rows71 = csv71.split(",");

const cnt7 = 3;
for (let i = 0; rows71.length > 0; i++) {
    array71[i] = rows71.slice(0, cnt7);
    rows71.splice(0, cnt7);
}
//===========================================
const csv72 = "1,2,3\n4,5,6\n7,8,9\n10,11,12";

let array72 = [];
let rows72 = csv72.split("\n");

for (let i = 0; i < rows72.length; i++) {
    array72[i] = rows72[i].split(",");
}
//===========================================
// 含まれることを確認する
for (let i = 0; i < array71.length; i++) {
    let tmp1 = JSON.stringify(array71[i]);

    for (let j = 0; j < array72.length; j++) {
        let tmp2 = JSON.stringify(array72[j]);
        console.log("tmp1 === tmp2 (" + tmp1 + ", " + tmp2 + ")");
        if (tmp1 === tmp2) {
            console.log("true");
            break;
        } else {
            console.log("false");
        }
    }
}
//===========================================
