import React, {useState} from 'react';
import TaskList from './TaskList';
import {_Card, _Card_Title, _Card_Title_Open, _Card_Details} from './assets/scss/Card.scss';

const Card = ({title, description, tasks}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={_Card}>
            <div className={_Card_Title}>{title}</div>
            <div className={_Card_Details}>
                {description}
                <TaskList tasks={tasks}/>
            </div>
        </div>
    );
};

export default Card;