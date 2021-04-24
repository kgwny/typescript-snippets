// オブジェクト(連想配列)を作成
var object1 = {
    apple: 'りんご',
    peach: '桃',
    orange: 'みかん',
    kiwi: 'キウイ',
    banana: 'バナナ'
};

// 要素数を取得する
var len = Object.keys(object1).length;
console.log("object1の要素数は", len, "です。");

// プロパティ名と値の表示：forEachを使う方法
Object.keys(object1).forEach(function (key) {
    console.log(key, object1[key]);
});

// 配列を作成
var array1 = ['ネズミ', '牛', '虎', 'うさぎ', '竜'];

// 要素数を取得する
len = array1.length;
console.log("array1の要素数は", len, "です。");

// 要素の表示：forを使う方法
for (let i = 0; i < len; i++) {
    console.log(array1[i]);
}
