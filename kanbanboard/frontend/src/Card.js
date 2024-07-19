import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';
import {_Card, _Card_Title, _Card_Title_Open, _Card_Details} from './assets/scss/Card.scss';

const Card = ({no, title, description}) => {
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState(null);

    const addTask = async (task) => {
        try {
            const response = await fetch('/api/task', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`API request failed! result: ${json.message}`);
            }

            console.log(json.data);
            setTasks([json.data, ...tasks]);
        } catch (err) {
            console.error(err);
        }
    }

    const fetchTasks = async () => {
        try {
            const response = await fetch(`/api/task?no=${no}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result!== 'success') {
                throw new Error(`API request failed! result: ${json.message}`);
            }

            console.log(json.data);
            setTasks(json.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className={_Card}>
            <div className={_Card_Title}>{title}</div>
            <div className={_Card_Details}>
                {description}
                <TaskList tasks={tasks} addTask={addTask}/>
            </div>
        </div>
    );
};

export default Card;