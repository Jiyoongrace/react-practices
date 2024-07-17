import React, {useState} from 'react';
import {_Card, _Card_Title, _Card_Title_Open} from './assets/scss/Card.scss';
import data from './assets/json/data';

// {
//     "no": 2,
//     "title": "Story Board 작성",
//     "description": "기능 기반의 화면 목업 작업",
//     "status": "Done",
//     "tasks": [
//     {
//         "no": 6,
//         "name": "사용자 스토리 리스트업",
//         "done": true
//     },
//     {
//         "no": 7,
//         "name": "개별 화면 목업",
//         "done": true
//     }
// ]
// }

const Card = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={_Card}>
            {data.map(e => (
            <div className={open ? `${_Card_Title} ${_Card_Title_Open}` : _Card_Title}
                 onClick={() => open === false ? setOpen(true) : setOpen(false)}
                 key={e.no}>
                {e.title}
            </div>
            ))}
        </div>
    );
};

export default Card;