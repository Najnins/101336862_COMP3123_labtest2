import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import "./App.css";

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

function App() {
    const [city, setCity] = useState("Toronto");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        if (!API_KEY) return;

        // Fetch current weather
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(data => {
                if (data.cod === "404") {
                    setError("City not found");
                    setWeather(null);
                } else {
                    setWeather(data);
                    setError("");
                }
            });

        // Fetch forecast
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(data => {
                if (data.cod === "200") {
                    // pick one forecast per day → closest to 12:00 PM
                    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00"));
                    setForecast(dailyData);
                }
            });

    }, [city]);


    return (
        <div className="container">
            <h1>Weather App</h1>
            <Search setCity={setCity} />

            {/* Display error if it exists */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Render WeatherCard only when data exists */}
            {weather?.weather && <WeatherCard weather={weather} />}
            {forecast.length > 0 && <Forecast forecast={forecast} />}
        </div>
    );


}

export default App;
