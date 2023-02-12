import { ForecastProps } from "../../interfaces/cities"
import DayDetails from "./DayDetails"
import classes from "./DayInformation.module.css"

const DayInformation = ({ forecast }: ForecastProps) => {
  return (
    <div className={classes.info}>
      <h2>Today's information</h2>
      <div className={classes.img__container}>
        <img
          src={`https://openweathermap.org/img/wn/${forecast.weather.icon}@2x.png`}
          alt={forecast.weather.description}
        />
      </div>
      <div className={classes.generalInfo}>
        <DayDetails forecast={forecast} />
      </div>
    </div>
  )
}

export default DayInformation
