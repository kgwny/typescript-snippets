const arr1 = [ 'hoge', 'fuga', 'poke', 'wakuteka', 'hoge', 'hoge' ];

const arr2 = arr1.filter(function(val, idx, arr1){
    return arr1.indexOf(val) === idx;
});
  
// 以下のようになります。
console.log(arr1);
// (6) ["hoge", "fuga", "poke", "wakuteka", "hoge", "hoge"]
  
console.log(arr2);
// (4) ["hoge", "fuga", "poke", "wakuteka"]
