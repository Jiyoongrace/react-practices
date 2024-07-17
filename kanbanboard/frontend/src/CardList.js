import React from 'react';
import {Card_List} from './assets/scss/CardList.scss';
import Card from './Card';

function CardList() {
    return (
        <div className={Card_List}>
            <h1>To Do</h1>
            <Card />
        </div>
    );
}

export default CardList;