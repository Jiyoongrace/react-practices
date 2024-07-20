import React from 'react';
import * as styles from './assets/scss/Task.scss';

const Task = ({no, name, done, updateTaskDone, deleteTask}) => {
    return (
        <li className={styles._Task}>
            <input
                type='checkbox'
                checked={done === 'Y'}
                className={styles.CheckBox}
                onChange={(e) => {
                    updateTaskDone(no, e.target.checked ? 'Y' : 'N');
                }} />
            {/* e.target.checked 는 현재 checkbox 의 체크 상태 */}
            {/* 현재 e.target.checked 가 true 이면 Y, 아니면 N으로 업데이트 */}
            {name}
            <a
                href='#'
                className={styles.Task_Remove}
                onClick={(e) => {
                    e.preventDefault();
                    deleteTask(no);
                }}></a>
        </li>
    );
};

export default Task;