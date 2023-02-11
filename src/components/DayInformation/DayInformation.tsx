import React, { useState } from "react"
import { roundedTemp } from "../../helper/format"
import { ForecastProps } from "../../interfaces/cities"

const DayInformation = ({ forecast }: ForecastProps) => {
  const [isCelsius, setIsCelsius] = useState(true)
  const handleTempType = () => {
    setIsCelsius(!isCelsius)
  }

  const tempType = isCelsius ? "°C" : "°F"
  return (
    <>
      <h2>Today's information</h2>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather.icon}@2x.png`}
        alt={forecast.weather.description}
      />
      <p>{forecast.weather.description}</p>
      <div>
        <h3>
          {roundedTemp(forecast.main.temp, isCelsius)} <span>{tempType}</span>
        </h3>
        <p>
          <span>
            H: {roundedTemp(Math.ceil(forecast.main.temp_max), isCelsius)}{" "}
            <span>{tempType}</span>
          </span>
          <span>
            L: {roundedTemp(Math.floor(forecast.main.temp_min), isCelsius)}{" "}
            <span>{tempType}</span>
          </span>
        </p>
      </div>
      <p>
        {forecast.name}, <span>{forecast.country}</span>
      </p>
      <p>
        Feels like {roundedTemp(forecast.main.feels_like, isCelsius)}{" "}
        <span>{tempType}</span>
      </p>
      <button type="button" onClick={handleTempType}>
        change to {isCelsius ? "°F" : "°C"}
      </button>
    </>
  )
}

export default DayInformation
