var emptyArray = ["  ", "  ", "  "];
//[["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
var masterDataArray = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]];
var newDataArray = [["a3", "b3", "c3"], ["a4", "b4", "c4"]];
// let masterDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
// let newDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
var tmpMasterDataArray = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]];
var tmpNewDataArray = [["a3", "b3", "c3"], ["a4", "b4", "c4"]];
// const tmpMasterDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
// const tmpNewDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
for (var i = 0; i < tmpMasterDataArray.length; i++) {
    var masterRow = JSON.stringify(tmpMasterDataArray[i]);
    console.log("master:" + masterRow);
    var exist = false;
    for (var j = 0; j < tmpNewDataArray.length; j++) {
        var newRow = JSON.stringify(tmpNewDataArray[j]);
        console.log("new:" + newRow);
        if (masterRow === newRow) {
            exist = true;
            break;
        }
    }
    if (!exist) {
        newDataArray.splice(i, 0, emptyArray);
        console.log("!!!!add!!!!");
    }
}
var tmpNewDataArray2 = newDataArray;
for (var i = 0; i < tmpNewDataArray2.length; i++) {
    var newRow = JSON.stringify(tmpNewDataArray2[i]);
    console.log("new:" + newRow);
    var exist = false;
    for (var j = 0; j < tmpMasterDataArray.length; j++) {
        var masterRow = JSON.stringify(tmpMasterDataArray[j]);
        console.log("master:" + masterRow);
        if (newRow === masterRow) {
            exist = true;
        }
        else if (newRow === JSON.stringify(emptyArray)) {
            exist = true;
        }
    }
    if (!exist) {
        masterDataArray.splice(i, 0, emptyArray);
        console.log("!!!!add!!!!");
        break;
    }
}
console.log("-----master-----");
console.log(masterDataArray);
console.log("-----new-----");
console.log(newDataArray);
