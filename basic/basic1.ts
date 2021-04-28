// 値を表示
console.log(true);
console.log(false);

// 変数に代入、変数の型名はboolean
const flg: boolean = true;

// 他のデータ型への変換
console.log(flg.toString()); // 'true' / 'false' になる
console.log(String(flg));    // こちらでも変換可能
console.log(Number(flg));    // 1, 0になる

// 他のデータ型をtrue/falseに変換
const notEmpty1 = Boolean("test string"); // 変換ルールは後述
const str = "not empty string";          // true/false反転するが演算子一つで変換可能
const isEmpty = !str;                    // 反転すると!Boolean()と同じ
const notEmpty2 = !!str;                  // もう1つ使うと反転せずにboolean型に
