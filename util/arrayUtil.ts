// csv to two-dimensional array
export const csvToArray = (
  csv: string
): string[][] => {
  let array = [];
  let rows = csv.split("\n");
  for (let i = 0; i < rows.length; i++) {
    array[i] = rows[i].split(",");
  }
  return array;
}

// merge two two-dimensional arrays, consider sorting and duplicate deletion
export const mergeTwoDimensionalArrays = (
  array1: string[][],
  array2: string[][]
): string[][] => {
  // merge array1 and array2
  let mergeArray = array1.concat(array2);

  // sort
  mergeArray.sort(function(a, b) {
    if (JSON.stringify(a) > JSON.stringify(b)) return 1;
    if (JSON.stringify(a) < JSON.stringify(b)) return -1;
  });

  // duplicate deletion
  const uniqueMergeArray = mergeArray.filter(function(e1, index1) {
    return !mergeArray.some(function(e2, index2) {
      return index1 > index2 && JSON.stringify(e1) === JSON.stringify(e2);
    });
  });

  return uniqueMergeArray;
}
