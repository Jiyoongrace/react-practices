import React from 'react';
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';
import CardList from './CardList';
import data from './assets/json/data';

function KanbanBoard() {
    const lists = ['ToDo', 'Doing', 'Done'];
    console.log(data);

    return (
        <div className={Kanban_Board}>
            {lists.map(list => (
                <CardList
                    key={list}
                    title={list}
                    cards={data.filter(card => card.status === list)}
                />
            ))}
        </div>
    );
}

export default KanbanBoard;