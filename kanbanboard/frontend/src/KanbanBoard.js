import React, {useState, useEffect} from 'react';
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';
import CardList from './CardList';

function KanbanBoard() {
    const lists = ['ToDo', 'Doing', 'Done'];
    const [cards, setCards] = useState(null);

    const fetchCards = async () => {
        try {
            const response = await fetch('/api/card', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });

            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(`API request failed! result: ${json.message}`);
            }

            console.log(json.data);
            setCards(json.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div className={Kanban_Board}>
            {lists.map(list => (
                <CardList
                    key={list}
                    title={list}
                    cards={cards?.filter(card => card.status === list)}
                />
            ))}
        </div>
    );
}

export default KanbanBoard;