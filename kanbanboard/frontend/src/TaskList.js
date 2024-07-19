import React, {useRef} from 'react';
import Task from './Task';
import * as styles from './assets/scss/TaskList.scss';

const TaskList = ({tasks, addTask}) => {
    const refForm = useRef(null);

    return (
        <div className={styles.Task_List}>
            <ul>
                {tasks?.map(task => (
                    <Task
                        key={task.no}
                        no={task.no}
                        name={task.name}
                        done={task.done}
                    />
                ))}
            </ul>
            <form
                ref={refForm}
                onSubmit={(e) => {
                    e.preventDefault();
                    addTask({
                        name: e.target.name.value,
                        done: tasks.done,
                        cardNo: tasks.cardNo
                    });
                    refForm.current.reset();
                }}>
                <input
                    className={styles.Input_Add_Task}
                    type='text'
                    placeholder='태스크 추가'/>
            </form>
            <input type='submit' value='등록'/>
        </div>
    );
};

export default TaskList;