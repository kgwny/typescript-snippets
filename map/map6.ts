interface drinkData {
    name: string;
    type: string;
    price: number;
}
  
interface Menu {
    [key: string]: drinkData;
}
  
const all: Menu = {
    coffee: {name: 'コーヒー', type: 'ノンアルコール', price: 350},
    tea: {name: 'お茶', type: 'ノンアルコール', price: 200},
    beer: {name: 'ビール', type: 'アルコール', price: 500},
};
  
(Object.keys(all) as (keyof Menu)[]).map((key) => {
    //const data = all[key];
    console.log(key, all[key].name, all[key].type, all[key].price);
});

// forEachを使う方法
Object.keys(all).forEach(function (key) {
    console.log(key, all[key].name, all[key].type, all[key].price);
});
