const { VITE_BASE_URL, VITE_APP_API_KEY } = import.meta.env

const config = {
  CITY_API: `${VITE_BASE_URL}/geo/1.0/direct?limit=5&appid=${VITE_APP_API_KEY}&`,
  WEATHER_API: `${VITE_BASE_URL}/data/2.5/weather?exclude=minutely&units=metric&appid=${VITE_APP_API_KEY}&`,
}

export default config
