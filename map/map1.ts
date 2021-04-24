enum Pet {
    CAT,
    DOG
}

const arr = Object.keys(Pet)
    .map(k => ({ "key": k, "val": Pet[k]}));

for (let i of arr) {
    console.log(i.key + ' : ' + i.val);
}
