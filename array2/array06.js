var dataArr1 = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]];
var dataArr2 = [["a0", "b0", "c0"], ["a3", "b3", "c3"], ["a4", "b4", "c4"], ["a5", "b5", "c5"]];
var mergeTwoDimensionalArrays = function (arr1, arr2) {
    var mergeArr = arr1.concat(arr2);
    mergeArr.sort(function (a, b) {
        if (JSON.stringify(a) > JSON.stringify(b))
            return 1;
        if (JSON.stringify(a) < JSON.stringify(b))
            return -1;
        return 0;
    });
    var uniqueMergeArr = mergeArr.filter(function (e1, index1) {
        return !mergeArr.some(function (e2, index2) {
            return index1 > index2 && JSON.stringify(e1) == JSON.stringify(e2);
        });
    });
    return uniqueMergeArr;
};
var resultArr = mergeTwoDimensionalArrays(dataArr1, dataArr2);
console.log(resultArr);
