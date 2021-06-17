//===========================================
var csv61 = "1,2,3,4,5,6,7,8,9,10,11,12";
var array61 = [];
var rows61 = csv61.split(",");
var eleCnt = 3;
for (var i = 0; rows61.length > 0; i++) {
    array61[i] = rows61.slice(0, eleCnt);
    rows61.splice(0, eleCnt);
}
//===========================================
var csv62 = "1,2,3\n4,5,6\n7,8,9\n10,11,12";
var array62 = [];
var rows62 = csv62.split("\n");
for (var i = 0; i < rows62.length; i++) {
    array62[i] = rows62[i].split(",");
}
//===========================================
for (var i = 0; i < 4; i++) {
    var tmp1 = JSON.stringify(array61[i]);
    var tmp2 = JSON.stringify(array62[i]);
    if (tmp1 === tmp2) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
