import React from 'react';
import * as styles from './assets/scss/Task.scss';

const Task = ({name, done}) => {
    return (
        <li className={styles._Task}>
            <input type='checkbox' checked={done} readOnly />
            {name}
            <a href='#' className={styles.Task_Remove}></a>
        </li>
    );
};

export default Task;