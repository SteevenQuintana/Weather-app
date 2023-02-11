import { ForecastProps } from "../interfaces/cities"
import Highlights from "./Highlights/Highlights"
import DayInformation from "./DayInformation/DayInformation"

const Forecast = ({ forecast }: ForecastProps) => {
  return (
    <>
      <section>
        <DayInformation forecast={forecast} />
      </section>
      <section>
        <Highlights forecast={forecast} />
      </section>
    </>
  )
}

export default Forecast
