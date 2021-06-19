var a = [1, 2, 3];
var b = a;
// [1,2,3]
var c = [1, 2, 3];
console.log("a は " + a);
console.log("b は " + b);
console.log("c は " + c);
if (a === b) {
    console.log("配列aと配列bは一致");
}
else {
    console.log("配列aと配列bは不一致");
}
if (a === c) {
    console.log("配列aと配列cは一致");
}
else {
    console.log("配列aと配列cは不一致");
}
var a_json = JSON.stringify(a);
var b_json = JSON.stringify(b);
var c_json = JSON.stringify(c);
console.log("a_jsonは" + a_json);
console.log("b_jsonは" + b_json);
console.log("c_jsonは" + c_json);
if (a_json === b_json) {
    console.log("JSONへ変換したaとJSONへ変換したbが一致");
}
else {
    console.log("JSONへ変換したaとJSONへ変換したbが不一致");
}
if (b_json === c_json) {
    console.log("JSONへ変換したaとJSONへ変換したcで一致");
}
else {
    console.log("JSONへ変換したaとJSONへ変換したcで不一致");
}
