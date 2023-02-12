import { useState } from "react"
import { roundedTemp } from "../../helper/format"
import { ForecastProps } from "../../interfaces/cities"
import classes from "./DayInformation.module.css"

const DayInformation = ({ forecast }: ForecastProps) => {
  const [isCelsius, setIsCelsius] = useState(true)
  const handleTempType = () => setIsCelsius(!isCelsius)
  const tempType = isCelsius ? "°C" : "°F"
  const date = new Date()
  return (
    <div className={classes.info}>
      <h2>Today's information</h2>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather.icon}@2x.png`}
        alt={forecast.weather.description}
      />
      <div className={classes.generalInfo}>
        <p>{forecast.weather.description}</p>
        <button type="button" onClick={handleTempType}>
          change to {isCelsius ? "°F" : "°C"}
        </button>
        <div className={classes.temp}>
          <h3>{roundedTemp(forecast.main.temp, isCelsius)}</h3>
          <span>{tempType}</span>
          <p className={classes.max}>
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
        <p>
          {date.toLocaleDateString(navigator.language, { dateStyle: "long" })}
        </p>
      </div>
    </div>
  )
}

export default DayInformation
