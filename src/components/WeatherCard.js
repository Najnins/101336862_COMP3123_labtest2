import React from "react";

function WeatherCard({ weather }) {

    const iconUrl = `http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`;

    return (
        <div className="weather-card">
            <h2>{weather?.name}, {weather?.sys?.country}</h2>

            <img src={iconUrl} alt={weather?.weather?.[0]?.description} />

            <h3>{Math.round(weather?.main?.temp)}°C</h3>

            <p className="description">{weather?.weather?.[0]?.description}</p>

            <div className="details">
                <p><strong>Humidity:</strong> {weather?.main?.humidity}%</p>
                <p><strong>Wind:</strong> {weather?.wind?.speed} m/s</p>
                <p><strong>Pressure:</strong> {weather?.main?.pressure} hPa</p>
            </div>
        </div>
    );
}

export default WeatherCard;

