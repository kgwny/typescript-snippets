enum Pet {
    CAT,
    DOG
}

// 改善の余地あり
const arr = Object.keys(Pet)
    .map(k => ({ "key": k, "val": Pet[k]}));
// 0 : CAT
// 1 : DOG
// CAT : 0
// DOG : 1

for (let i of arr) {
    console.log(i.key + ' : ' + i.val);
}
