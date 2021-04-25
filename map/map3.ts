const fruits = {
    apple: {name: 'りんご', price: 500},
    banana: {name: 'バナナ', price: 100},
    melon: {name: 'メロン', price: 1000},
};
  
// map内の要素を全取得する
Object.keys(fruits).map((key) => {
    const data = fruits[key];
    console.log(data);
});
