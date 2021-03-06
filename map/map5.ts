interface drinkData {
    name: string;
    type: string;
    price: number;
}
  
interface Menu {
    coffee: drinkData;
    tea: drinkData;
    beer: drinkData;
}
  
const summary: Menu = {
    coffee: {name: 'コーヒー', type: 'ノンアルコール', price: 350},
    tea: {name: 'お茶', type: 'ノンアルコール', price: 200},
    beer: {name: 'ビール', type: 'アルコール', price: 500},
};
  
(Object.keys(summary) as (keyof Menu)[]).map((key) => {
    const data = summary[key];
    console.log(data);
});
