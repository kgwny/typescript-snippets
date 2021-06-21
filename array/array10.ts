// 配列を昇順でソート
var array = [80, 40, 120];

array.sort(
  function(a,b){
    return (a < b ? -1 : 1);
  }
);

// [40, 80, 120]
console.log(array);
