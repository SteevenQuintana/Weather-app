import { useState } from "react"
import withCities from "./mocks/with-cities-results.json"
import { Option } from "./interfaces/cities"
import "./App.css"

function App(): JSX.Element {
  const [search, setSearch] = useState<string>("")
  const [options, setOptions] = useState<Option[]>([])

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value.startsWith(" ")) return
    setSearch(value)

    // try {
    //   const { VITE_BASE_URL, VITE_APP_API_KEY } = import.meta.env
    //   const response = await fetch(
    //     `${VITE_BASE_URL}/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${VITE_APP_API_KEY}`
    //   )
    //   if (!response.ok) throw new Error("Cities does not supported")

    //   const data = await response.json()
    //   const dataNeeded = data.map((data: any) => ({
    //     name: data.name,
    //     lat: data.lat,
    //     lon: data.lon,
    //     country: data.country,
    //   }))

    //   setOptions(dataNeeded)
    // } catch (err) {
    //   console.log(err)
    // }
    const dataNeeded = withCities.map((data) => ({
      name: data.name,
      lat: data.lat,
      lon: data.lon,
      country: data.country,
    }))
    setOptions(dataNeeded)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(search)
  }

  const onSelectOption = (option: Option) => {
    setSearch(option.name)
  }

  return (
    <div className="page">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Washington D.C, Ankara... "
          value={search}
          onChange={handleSearch}
        />
        <ul className="options-list">
          {options.map((option) => (
            <li key={`${option.lat} - ${option.lon}`}>
              <button type="button" onClick={() => onSelectOption(option)}>
                {option.name} {option.country}
              </button>
            </li>
          ))}
        </ul>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default App
