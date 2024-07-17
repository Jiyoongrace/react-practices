import fs from 'fs';
import update from 'react-addons-update';

console.log("== Sol =========================================");
const order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder = update(order, {
    // 프로퍼티 변경
    receive: {
        $set: "강남구 논현동..."
    },
    // Nest 객체 프로퍼티 변경
    payment: {
        method: {
            $set: "Mobile"
        }
    },
    products: {
        // 배열 요소 객체 프로퍼티 변경
        0: {
            amount: {
                $set: 200
            }
        },
        // 배열 요소 추가
        $push: [{
            no: 'c002-006',
            name: '핑크 양말',
            price: 3000,
            amount: 5
        }]
    }
});

console.log(order, updateOrder);