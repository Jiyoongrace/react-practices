import React from 'react';
import {Email_List} from './assets/scss/Emaillist.scss';
import Email from './Email';

function Emaillist({emails}) {
    return (
        <ul className={Email_List}>
            {/* 삼항연산자: emails ? ~~ : null or Optional Chaining: emails?. null이 아닐 때만 실행 */}
            {
                emails?.map(email => <Email
                                        key={email.no}
                                        no={email.no}
                                        firstName={email.firstName}
                                        lastName={email.lastName}
                                        email={email.email} />)
            }
        </ul>
    );
}

export default Emaillist;