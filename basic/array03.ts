let emptyArray = ["  ","  ","  "];

// // masterはあっているパターン
// let masterDataArray = [["a3","b3","c3"],["a4","b4","c4"],["a5","b5","c5"]];
// let newDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
// // masterはあっているパターン
// const tmpMasterDataArray = [["a3","b3","c3"],["a4","b4","c4"],["a5","b5","c5"]];
// const tmpNewDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];

// const tmpMasterDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
// const tmpNewDataArray = [["a3","b3","c3"],["a4","b4","c4"],["a5","b5","c5"]];

let masterDataArray = [];
let newDataArray = [];
const tmpMasterDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
const tmpNewDataArray = [["a0","b0","c0"],["a3","b3","c3"],["a4","b4","c4"],["a5","b5","c5"]];

for (let i = 0; i < tmpMasterDataArray.length; i++) {
    let masterRow = JSON.stringify(tmpMasterDataArray[i]);
    let exist: boolean = false;

    for (let j = 0; j < tmpNewDataArray.length; j++) {
        let newRow = JSON.stringify(tmpNewDataArray[j]);

        if (masterRow === newRow) {
            exist = true;
            break;
        }
    }

    if (exist) {
        newDataArray.push(tmpMasterDataArray[i]);
    }
    else {
        masterDataArray.push(tmpMasterDataArray[i]);
        newDataArray.push(emptyArray);
    }
}

for (let i = 0; i < tmpNewDataArray.length; i++) {
    let newRow = JSON.stringify(tmpNewDataArray[i]);
    let exist: boolean = false;

    for (let j = 0; j < tmpMasterDataArray.length; j++) {
        let masterRow = JSON.stringify(tmpMasterDataArray[j]);

        if (newRow === masterRow) {
            exist = true;
            break;
        }
    }

    if (exist) {
        masterDataArray.push(tmpNewDataArray[i]);
    }
    else {
        newDataArray.push(tmpNewDataArray[i]);
        masterDataArray.push(emptyArray);
    }
}

console.log("-----master-----");
console.log(masterDataArray);
console.log("-----new-----");
console.log(newDataArray);
