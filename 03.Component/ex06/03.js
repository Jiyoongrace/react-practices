import fs from 'fs';

console.log("== Violation ===================================");
let order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder = Object.assign({}, order, {receive: '강남구 논현동...'});
updateOrder.payment.method = 'Mobile';
console.log(order, updateOrder);
