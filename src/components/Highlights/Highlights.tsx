import humidity from "../../assets/humidity.svg"
import wind from "../../assets/wind.svg"
import sunrise from "../../assets/sunrise.svg"
import sunset from "../../assets/sunset.svg"
import clouds from "../../assets/clouds.svg"
import pressure from "../../assets/pressure.svg"
import Highlight from "./Highlight"
import { getHour } from "../../helper/format"
import { ForecastProps } from "../../interfaces/cities"
import classes from "./Highlights.module.css"

const Highlights = ({ forecast }: ForecastProps) => {
  return (
    <div className={classes.highlights}>
      <h2>Today's Highlights</h2>
      <div className={classes.container}>
        <Highlight
          title="Humidity"
          img={humidity}
          description={`${forecast.main.humidity}`}
          unit="%"
        />
        <Highlight
          title="Wind Speed"
          img={wind}
          description={`${forecast.wind.speed}`}
          unit="m/s"
        />
        <Highlight
          title="Clouds"
          img={clouds}
          description={`${forecast.clouds}`}
          unit="%"
        />
        <Highlight
          title="Sunrise"
          img={sunrise}
          description={`${getHour(forecast.sunrise)}`}
          unit="a.m."
        />
        <Highlight
          title="Sunset"
          img={sunset}
          description={`${getHour(forecast.sunset)}`}
          unit="p.m."
        />
        <Highlight
          title="Pressure"
          img={pressure}
          description={`${forecast.main.pressure}`}
          unit="hPa"
        />
      </div>
    </div>
  )
}

export default Highlights
