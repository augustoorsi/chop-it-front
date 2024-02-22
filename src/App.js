import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./App.module.css"


function App() {
    const location = useLocation()
    const {pathname} = location

    const [URL, setURL] = useState("");
    const [newURL, setChoppedURL] = useState("");

    const handleChange = (e) => {
        setURL(e.target.value);
    }

    const handleChop = () => {
        fetch('http://localhost:3001/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                URL: URL,
            }),
        })
            .then(response => response.json())
            .then(data => {
                const choppedURL = data.choppedURL;
                console.log('choppedURL:', choppedURL);
                setChoppedURL(choppedURL)
            })
            .catch(error => console.error('Error:', error));
    }

    const NavToURL = (newURL) =>{
        fetch(`http://localhost:3001${newURL}`)
        .then(res=> res.json())
        .then(data => {
            console.log(data.URL)
            window.location.href = data.URL
        })
        .catch(error => console.error('Error:', error))
    }

    useEffect(()=>{
        if(pathname != "/") NavToURL(pathname)
    },[location])


    return (
        <div className={styles.container}>
            <h1>CHOP IT</h1>
            <label>Your URL:
                <input onChange={(event) => handleChange(event)} type='text' name='URL' value={URL}></input>
                <button onClick={handleChop}>Chop!</button>
            </label>
            <label>Chopped URL:
                <input readOnly type='text' value={newURL ? `http://localhost:3000/${newURL}` : ""}></input>
            </label>
        </div>
    );
}

export default App;
