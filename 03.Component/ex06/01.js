import fs from 'fs';

console.log("== Violation ===================================");
let order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));
const updateOrderProducts1 = order.products;
updateOrderProducts1.push({
    no: 'c002-003',
    name: '블루 양말',
    price: 2000,
    amount: 1
});
console.log(order.products, updateOrderProducts1, order.products === updateOrderProducts1);



console.log("== Sol1 ========================================");
order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrderProducts2 = order.products.concat({
    no: 'c002-004',
    name: '레드 양말',
    price: 1500,
    amount: 2
});
console.log(order.products, updateOrderProducts2, order.products === updateOrderProducts2);




console.log("== Sol2 ========================================");
order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrderProducts3 = [...order.products, {
    no: 'c002-005',
    name: '노란 양말',
    price: 1700,
    amount: 3
}];
console.log(order.products, updateOrderProducts3, order.products === updateOrderProducts3);



const data = [{no: 10, status: 'Done'}, {no: 12, status: 'Doing'}, {no: 12, status: 'Doing'}, {no: 13, status: 'Todo'}];

const cards = data.filter(e => e.status === 'Doing');
console.log(cards);

// <CardList cards={} Title={'Doing'} />
// <CardList cards={} Title={'Done'} />
// <CardList cards={} Title={'Todo'} />
// return <CardList cards={data.filter(e => e.status === 'Doing')} Title={'Doing'} />

// const cards = [];
// for() {
//     cards.push(data[i]); (X)
// }

