var blank = "";
var csvToArray = function (csv) {
    var array = [];
    var rows = csv.split("\n");
    for (var i = 0; i < rows.length; i++) {
        array[i] = rows[i].split(",");
    }
    return array;
};
var result = csvToArray(blank);
console.log(JSON.stringify(result));
