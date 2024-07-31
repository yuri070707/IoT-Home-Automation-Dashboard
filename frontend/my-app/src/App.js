import React, { useState, useEffect } from 'react';
import { getData, sendData } from './services/api';
import './App.css';

function App() {
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching data...");
            const result = await getData();
            console.log("Data fetched:", result);
            setData(result);
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending data...");
        const result = await sendData(temperature, humidity);
        console.log("Data sent:", result);
        if (result) {
            setData(result);
        } else {
            console.error("Failed to send data.");
        }
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
