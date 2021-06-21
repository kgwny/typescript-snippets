let emptyArray = ["  ","  ","  "];

//[["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];

let masterDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
let newDataArray = [["a3","b3","c3"],["a4","b4","c4"]];
// let masterDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
// let newDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];

const tmpMasterDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
const tmpNewDataArray = [["a3","b3","c3"],["a4","b4","c4"]];
// const tmpMasterDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];
// const tmpNewDataArray = [["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"]];

for (let i = 0; i < tmpMasterDataArray.length; i++) {
    let masterRow = JSON.stringify(tmpMasterDataArray[i]);
    console.log("master:" + masterRow);
    let exist: boolean = false;

    for (let j = 0; j < tmpNewDataArray.length; j++) {
        let newRow = JSON.stringify(tmpNewDataArray[j]);
        console.log("new:" + newRow);

        if (masterRow === newRow) {
            exist = true;
            break;
        }
    }

    if (!exist) {
        newDataArray.splice(i, 0, emptyArray);
        console.log("!!!!add!!!!")
    }
}

const tmpNewDataArray2 = newDataArray;

for (let i = 0; i < tmpNewDataArray2.length; i++) {
    let newRow = JSON.stringify(tmpNewDataArray2[i]);
    console.log("new:" + newRow);
    let exist: boolean = false;

    for (let j = 0; j < tmpMasterDataArray.length; j++) {
        let masterRow = JSON.stringify(tmpMasterDataArray[j]);
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
        console.log("!!!!add!!!!")
        break;
    }
}

console.log("-----master-----");
console.log(masterDataArray);
console.log("-----new-----");
console.log(newDataArray);
