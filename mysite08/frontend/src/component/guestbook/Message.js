import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../../assets/scss/component/guestbook/Message.scss';

export default function Message({no, name, message, deleteMessage}) {
    return (
        <li className={styles.Message}>
            <strong>{name}</strong>
            <p>
                {
                    // 개행(\n)을 <br/>로 변환
                    message && message.split('\n').map((line, index) => index > 0 ?
                        <span key={`${no}-${index}`}>
                            <br/>
                            {line}
                        </span> :
                        line
                    )
                }
            </p>
            <strong/>
            <a onClick={() => deleteMessage(no)}>삭제</a>
        </li>
    );
}

Message.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}