import React from 'react';
import './assets/scss/App.scss';
import KanbanBoard from './Kanbanboard.js';

function App() {
    return (
        <div id={'App'} className={'App'}>
            <KanbanBoard />
        </div>
    );
}

export default App;