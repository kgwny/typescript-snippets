interface Items {
    id: string;
    name: string;
}

interface Employees {
    name: string;
}

interface ItemsEmployees {
    id: string;
    name: string;
    employees: Employees[];
}

const items: Items = { id:'1', name:'経理部' }

const itemsIncludesEmployees: ItemsEmployees[] = [
    { id:'1', name:'経理部', employees:[{ name:'山田' }, { name:'佐藤' }]},
    { id:'2', name:'営業部', employees:[{ name:'加藤' }, { name:'山本' }]},
    { id:'3', name:'企画部', employees:[]}
]

const filteredEmployees = itemsIncludesEmployees.filter(e => 
    e.id === items.id && e.name === items.name
).map(v => {
    return {
        typeId:v.id,
        typeName:v.name      
    }      
})
console.log(filteredEmployees)
