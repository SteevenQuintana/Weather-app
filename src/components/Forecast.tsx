import { ForecastProps } from "../interfaces/cities"
import Highlights from "./Highlights/Highlights"
import DayInformation from "./DayInformation/DayInformation"
import classes from "./Forecast.module.css"

const Forecast = ({ forecast }: ForecastProps) => {
  return (
    <div className={classes.forecast}>
      <section className={classes.general}>
        <DayInformation forecast={forecast} />
      </section>
      <section className={classes.detail}>
        <Highlights forecast={forecast} />
      </section>
    </div>
  )
}

export default Forecast
