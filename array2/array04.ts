let emptyArray = ["  ","  ","  "];

let masterDataArray = [];
let newDataArray = [];
const tmpMasterDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
const tmpNewDataArray = [["a0","b0","c0"],["a3","b3","c3"],["a4","b4","c4"],["a5","b5","c5"]];

let mergeArray = tmpMasterDataArray.concat(tmpNewDataArray);
mergeArray.sort(function(a, b) {
	if (JSON.stringify(a) > JSON.stringify(b)) return 1;
	if (JSON.stringify(a) < JSON.stringify(b)) return -1;
	return 0;
});
const uniqueMergeArray = mergeArray.filter(function(e, index) {
  return !mergeArray.some(function(e2, index2) {
    return index > index2 && JSON.stringify(e) == JSON.stringify(e2);
  });
});
console.log("-----merge result-----");
console.log(uniqueMergeArray);

for (let i = 0; i < uniqueMergeArray.length; i++) {
    let mergeRow = JSON.stringify(uniqueMergeArray[i]);
    let existMaster: boolean = false;
    let existNew: boolean = false;

    for (let j = 0; j < tmpMasterDataArray.length; j++) {
        let masterRow = JSON.stringify(tmpMasterDataArray[j]);

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

    for (let j = 0; j < tmpNewDataArray.length; j++) {
        let newRow = JSON.stringify(tmpNewDataArray[j]);

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
