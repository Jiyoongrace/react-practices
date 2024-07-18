import React from 'react';
import styles from './assets/scss/Email.scss';

function Email({firstName, lastName, email}) {
    return (
        <li className={styles._Email}>
            <h4>{firstName}{lastName}</h4>
            <span>{email}</span>
            <a href='' />
        </li>
    );
}

export default Email;