var emptyArray = ["  ", "  ", "  "];
var masterDataArray = [];
var newDataArray = [];
var tmpMasterDataArray = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]];
var tmpNewDataArray = [["a0", "b0", "c0"], ["a3", "b3", "c3"], ["a4", "b4", "c4"], ["a5", "b5", "c5"]];
var mergeArray = tmpMasterDataArray.concat(tmpNewDataArray);
mergeArray.sort(function (a, b) {
    if (JSON.stringify(a) > JSON.stringify(b))
        return 1;
    if (JSON.stringify(a) < JSON.stringify(b))
        return -1;
    return 0;
});
var uniqueMergeArray = mergeArray.filter(function (e, index) {
    return !mergeArray.some(function (e2, index2) {
        return index > index2 && JSON.stringify(e) == JSON.stringify(e2);
    });
});
console.log("-----merge result-----");
console.log(uniqueMergeArray);
for (var i = 0; i < uniqueMergeArray.length; i++) {
    var mergeRow = JSON.stringify(uniqueMergeArray[i]);
    var existMaster = false;
    var existNew = false;
    for (var j = 0; j < tmpMasterDataArray.length; j++) {
        var masterRow = JSON.stringify(tmpMasterDataArray[j]);
        if (mergeRow === masterRow) {
            existMaster = true;
            break;
        }
    }
    if (existMaster) {
        masterDataArray.push(uniqueMergeArray[i]);
    }
    else {
        masterDataArray.push(emptyArray);
    }
    for (var j = 0; j < tmpNewDataArray.length; j++) {
        var newRow = JSON.stringify(tmpNewDataArray[j]);
        if (mergeRow === newRow) {
            existNew = true;
            break;
        }
    }
    if (existNew) {
        newDataArray.push(uniqueMergeArray[i]);
    }
    else {
        newDataArray.push(emptyArray);
    }
}
console.log("-----master-----");
console.log(masterDataArray);
console.log("-----new-----");
console.log(newDataArray);
