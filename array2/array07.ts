const blank = "";

const csvToArray = (
    csv: string
): string[][] => {
    let array = [];
    let rows = csv.split("\n");
    for (let i = 0; i < rows.length; i++) {
        array[i] = rows[i].split(",");
    }
    return array;
}

const result = csvToArray(blank);
console.log(JSON.stringify(result));
// [[""]]
