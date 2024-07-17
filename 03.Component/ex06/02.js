import fs from 'fs';


console.log("== Violation ===================================");
let order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder1 = order;
updateOrder1.receive = "강남구 서초구..."; // 직접 수정
console.log(order, updateOrder1, updateOrder1 === order);



console.log("== Sol =========================================");
order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder2 = Object.assign({}, order, {receive: "강남구 서초구..."});
console.log(order, updateOrder2, updateOrder2 === order);