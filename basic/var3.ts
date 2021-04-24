const hoge = /BC/;
console.log(hoge.test("ABC"));
// true
console.log(hoge.test("ACB"));
// false

let a:number = 100;
let b:any = `${a}`;
// ${a}として、バッククォートで囲む
console.log(typeof b);
// string

// メソッド	testメソッド
// AB	文字列を指定
// [AB]	文字をORで指定
// [^A]	文字を否定で指定
// [A-C]	文字を範囲で指定
// ^A	先頭の文字列を指定
// A$	末尾の文字列を指定
// c{2}	連続する文字を指定
// [0-9]{1,}	数値1桁以上を指定
// ^[0-9]{5}	5桁の半角数値を指定
// ^[0-9a-f]{5}$	5桁の半角数値または英字の小文字(a-f)を指定
// ^[0-9]{3}-[0-9]{4}$	郵便番号を指定(数値3桁とハイフンと数値4桁)
// エスケープ	ドット(.)を文字として指定(エスケープ)
// 構文	正規表現の構文とオプション