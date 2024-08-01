import React, { useState, useEffect } from 'react';
import { getData, sendData } from './services/api';
import './App.css';

function App() {
    // State to hold the temperature and humidity values
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [data, setData] = useState(null);

    // useEffect hook to fetch data from the backend when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching data...");
            const result = await getData();
            console.log("Data fetched:", result);
            setData(result);
        };
        fetchData();
    }, []);

    // Function to handle form submission and send data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending data...");
        const result = await sendData(temperature, humidity);
        console.log("Data sent:", result);
        setData(result);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Home Automation Dashboard</h1>
                {data ? (
                    <div>
                        <p>Temperature: {data.temperature} °C</p>
                        <p>Humidity: {data.humidity} %</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter Temperature:
                        <input type="text" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
                    </label>
                    <label>
                        Enter Humidity:
                        <input type="text" value={humidity} onChange={(e) => setHumidity(e.target.value)} />
                    </label>
                    <button type="submit">Send Data</button>
                </form>
            </header>
        </div>
    );
}

export default App;
