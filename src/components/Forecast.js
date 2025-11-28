import React from "react";

function Forecast({ forecast }) {
    return (
        <div className="forecast">
            <h3>5-Day Forecast</h3>
            <div className="forecast-grid">
                {forecast.map((day, index) => {
                    const icon = day.weather[0].icon;
                    const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" });

                    return (
                        <div key={index} className="forecast-item">
                            <p>{date}</p>
                            <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
                            <p>{Math.round(day.main.temp)}°C</p>
                            <p style={{ textTransform: "capitalize" }}>{day.weather[0].description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Forecast;
