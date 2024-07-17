import fs from 'fs';
import update from 'react-addons-update';

console.log("== Sol =========================================");
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

