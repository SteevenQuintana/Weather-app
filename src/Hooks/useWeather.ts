import { useEffect, useState } from "react"
import config from "../config/config"
import { Forecast, Option } from "../interfaces/cities"
import withCities from "../mocks/with-cities-results.json"
import withWeather from "../mocks/with-weather-results.json"

const useWeather = () => {
  const [search, setSearch] = useState<string>("")
  const [options, setOptions] = useState<Option[]>([])
  const [city, setCity] = useState<Option | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [forecast, setForecast] = useState<Forecast | null>(null)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value.startsWith(" ")) return
    setSearch(value)
    getCityInfo(value)

    // const dataNeeded = withCities.map((data) => ({
    //   name: data.name,
    //   lat: data.lat,
    //   lon: data.lon,
    //   country: data.country,
    // }))
    // setOptions(dataNeeded)
  }

  const getCityInfo = async (value: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(`${config.CITY_API}&q=${value.trim()}`)
      if (!response.ok) throw new Error("Cities does not supported")
      const data = await response.json()
      const dataNeeded = data.map((data: any) => ({
        name: data.name,
        lat: data.lat,
        lon: data.lon,
        country: data.country,
      }))
      setOptions(dataNeeded)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (city) {
      getWeatherInfo(city)
      setOptions([])
    }
  }

  const onSelectOption = (option: Option) => {
    setCity(option)
    getWeatherInfo(option)
    setOptions([])
  }

  const getWeatherInfo = async (option: Option) => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `${config.WEATHER_API}&lat=${option.lat}&lon=${option.lon}`
      )
      if (!response.ok) throw new Error("City not found.")

      const data = await response.json()

      // const data = withWeather

      const forecastInfo: Forecast = {
        name: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        clouds: data.clouds.all,
        main: data.main,
        weather: data.weather[0],
        wind: data.wind,
      }

      setForecast(forecastInfo)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (city) {
      setSearch(city.name)
      setOptions([])
    }
  }, [city])

  return {
    search,
    options,
    forecast,
    handleSearch,
    handleSubmit,
    onSelectOption,
    isLoading,
  }
}
export default useWeather
