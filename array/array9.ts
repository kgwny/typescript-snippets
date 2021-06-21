// 配列を降順でソート
var arr = [80, 40, 120];

arr.sort(function(a, b){
    return b - a;
});

//=> [40, 80, 120]
//120, 80, 40
