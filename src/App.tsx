import useWeather from "./Hooks/useWeather"
import "./App.css"
import Forecast from "./components/Forecast"

function App(): JSX.Element {
  const {
    search,
    options,
    forecast,
    handleSearch,
    handleSubmit,
    onSelectOption,
    isLoading,
  } = useWeather()
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
                {option.name}, {option.country}
              </button>
            </li>
          ))}
        </ul>
        <button type="submit">Search</button>
      </form>
      {forecast !== null && (
        <section>
          {isLoading ? <h2>Loading...</h2> : <Forecast forecast={forecast} />}
        </section>
      )}
    </div>
  )
}

export default App
