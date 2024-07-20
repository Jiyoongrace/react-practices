import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

function App() {
    const [emails, setEmails] = useState(null);

    const deleteEmail = async (no) => {
        try {
            const response = await fetch(`/api/${no}`, {
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
            setEmails(emails.filter(email => email.no !== no));
        } catch (err) {
            console.error(err);
        }
    }

    const addEmail = async (email) => {
        console.log(emails);
        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email) // 객체를 JSON으로 바꿈
            }); // url, option

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`API request failed! result: ${json.message}`);
            }

            console.log(json.data);
            setEmails([json.data, ...emails]);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchEmails = async (keyword) => {
        try {
            const response = await fetch(`/api?kw=${keyword ? keyword : ''}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            }); // url, option

            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(`API request failed! result: ${json.message}`);
            }

            console.log(json.data);
            setEmails(json.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchEmails();
    }, []);
    return (
        <div id={'App'}>
            <RegisterForm addEmail={addEmail} />
            <SearchBar fetchEmails={fetchEmails} />
            <Emaillist emails={emails} deleteEmail={deleteEmail} />
        </div>
    );
}

export default App;