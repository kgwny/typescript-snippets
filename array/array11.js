// 2次元配列
var arr = [["田中", 80],
    ["山田", 90],
    ["鈴木", 80],
    ["竹田", 60]
];
// ソート
arr.sort(function (a, b) {
    if (a[1] > b[1])
        return 1;
    if (a[1] < b[1])
        return -1;
    return 0;
});
console.log(arr);
