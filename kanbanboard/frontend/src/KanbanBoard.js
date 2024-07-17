import React from 'react';
import './assets/scss/App.scss';
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';
import CardList from './CardList';

function KanbanBoard() {
    return (
        <div className={Kanban_Board}>
            <CardList />
        </div>
    );
}

export default KanbanBoard;