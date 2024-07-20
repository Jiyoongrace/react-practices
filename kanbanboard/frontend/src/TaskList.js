import React from 'react';
import Task from './Task';
import * as styles from './assets/scss/TaskList.scss';

const TaskList = ({tasks, addTask, updateTaskDone, deleteTask}) => {

    return (
        <div className={styles.Task_List}>
            <ul>
                {tasks?.map(task => (
                    <Task
                        key={task.no}
                        no={task.no}
                        name={task.name}
                        done={task.done}
                        updateTaskDone={updateTaskDone}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
            <input
                className={styles.Input_Add_Task}
                type='text'
                placeholder='태스크 추가'
                onKeyDown={(e) => {
                    // React 에서 한글을 입력할 때 두 번 입력되는 오류
                    // 이 오류는 한글이 자음과 모음으로 이루어져 있기 때문이다.
                    // 자음과 모음을 입력할 때, IME 가 입력 중임을 나타내는 isComposing 상태가 된다.
                    // 이 상태에서 또 다른 키가 입력되면, IME 는 해당 키를 모음으로 인식하여 한 글자로 처리한다.

                    // 해결 방법
                    // isComposing 상태가 true 인 경우, 이벤트를 무시한다.
                    if (e.nativeEvent.isComposing) {
                        return;
                    }

                    // isComposing 상태가 false 인 경우, 이벤트를 처리한다.
                    if(e.key === 'Enter') {
                        addTask(e.target.value);
                        e.target.value = '';
                    }
                }} />
        </div>
    );
};

export default TaskList;