import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open, Card_Details} from './assets/scss/Card.scss';
import update from "react-addons-update";

const Card = ({no, title, description}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState(null);

    const deleteTask = async (taskNo) => {

        try {
            const response = await fetch(`/api/task/${taskNo}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result!== 'success') {
                throw new Error(`API request failed! result: ${json.message}`);
            }

            console.log(json.data);
            setTasks(tasks.filter((task) => task.no !== taskNo));
        } catch (err) {
            console.error(err);
        }
    }

    const updateTaskDone = async (taskNo, done) => {
        try {
            const response = await fetch(`/api/task/${taskNo}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded' // 키-값 쌍의 데이터를 전송 name=value 형식
                },
                body: `done=${done}`
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result!== 'success') {
                throw new Error(`API request failed! result: ${json.message}`);
            }

            console.log(json.data);

            // tasks 배열에서 no 속성이 응답 데이터의 no와 일치하는 태스크의 인덱스를 찾는다.
            const index = tasks.findIndex((task) => task.no === json.data.no);

            // update 함수는 불변성을 유지하면서 tasks 배열의 복사본을 생성하고, 지정된 인덱스의 done 속성을 업데이트한다.
            // $set: done 속성을 새로운 값으로 설정한다.
            const updateTask = update(tasks, {
                [index]: {
                    done: {
                        $set: json.data.done
                    }
                }
            });

            setTasks(updateTask);
        } catch (err) {
            console.error(err);
        }
    }

    const addTask = async (taskName) => {
        const newTask = {
            no: null,
            name: taskName,
            done: 'N',
            cardNo: no
        };

        try {
            const response = await fetch('/api/task', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
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

    return (
        <div className={_Card}>
            <div
                className={ isOpen ? Card_Title_Open : Card_Title}
                onClick={async (e) => {
                    if (!isOpen) {
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
                    setIsOpen(!isOpen);
                }}>{title}</div>
            <div className={Card_Details}>
                {description}
                { isOpen ? <TaskList
                                tasks={tasks}
                                addTask={addTask}
                                updateTaskDone={updateTaskDone}
                                deleteTask={deleteTask} /> : null
                }
            </div>
        </div>
    );
};

export default Card;