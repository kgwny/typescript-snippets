// 配列71
//===========================================
var csv71 = "4,5,6,13,14,15";
var array71 = [];
var rows71 = csv71.split(",");
// 要素を3つずつに分割して配列へ設定する
var separeteNum = 3;
for (var i = 0; rows71.length > 0; i++) {
    array71[i] = rows71.slice(0, separeteNum);
    rows71.splice(0, separeteNum);
}
// 配列72
//===========================================
var csv72 = "1,2,3\n4,5,6\n7,8,9\n10,11,12";
var array72 = [];
var rows72 = csv72.split("\n");
for (var i = 0; i < rows72.length; i++) {
    array72[i] = rows72[i].split(",");
}
//===========================================
// 配列71の各要素が配列72に含まれることを確認する
for (var i = 0; i < array71.length; i++) {
    var tmp1 = JSON.stringify(array71[i]);
    console.log("tmp1 = " + tmp1);
    for (var j = 0; j < array72.length; j++) {
        var tmp2 = JSON.stringify(array72[j]);
        console.log("tmp2 = " + tmp2);
        console.log("tmp1 === tmp2 (" + tmp1 + ", " + tmp2 + ")");
        if (tmp1 === tmp2) {
            console.log("true");
            break;
        }
        else {
            console.log("false");
        }
    }
}
//===========================================
