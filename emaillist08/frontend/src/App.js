import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

function App() {
    const [emails, setEmails] = useState(null);

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
            <RegisterForm />
            <SearchBar fetchEmails={fetchEmails} />
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;