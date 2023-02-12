import useWeather from "./Hooks/useWeather"
import "./App.css"
import Forecast from "./components/Forecast"
import Form from "./components/Form"

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
    <main className="page">
      <section className="form-section">
        <Form
          search={search}
          options={options}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          onSelectOption={onSelectOption}
        />
      </section>
      {forecast !== null && (
        <section className="forecast-section">
          {isLoading ? (
            <h2 className="loading">Loading...</h2>
          ) : (
            <Forecast forecast={forecast} />
          )}
        </section>
      )}
    </main>
  )
}

export default App
