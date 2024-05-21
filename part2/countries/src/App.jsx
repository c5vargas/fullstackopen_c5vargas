import { useEffect, useState } from 'react'
import countriesService from './services/countries'
import weatherService from './services/weather'
import Error from './components/Error'
import Country from './components/Country'
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)
  const [weather, setWeather] = useState(null)
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    setCountries([])
    setCountry(null)
    
    if(query) {
      countriesService.getAll()
        .then(response => handleCountries(response))
        .catch(() => setError('Too many matches, specify another filter.'))
    } 
  }, [query])

  useEffect(() => {
    if(country) {
      const [lat, lng] = country.capitalInfo.latlng
      weatherService.getWeather(lat, lng).then(response => {
        setWeather({
          temp: response.main.temp,
          wind: response.wind.speed,
          icon: `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
        })
      })
    }
  }, [country])

  const handleCountries = (countriesReq) => {
    const countriesArr = countriesReq.filter(el => el.name.common.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

    if(countriesArr.length > 10)
      return setError('Too many matches, specify another filter.')

    setCountries(countriesArr)

    if(countriesArr.length === 1) {
      handleSelectCountry(countriesArr[0].name.common)
    }
  }

  const handleSelectCountry = (countryName) => {
    setError(null)
    setCountries([])

    countriesService.getByName(countryName)
      .then(response => setCountry(response))
      .catch(() => setError('An error occurred.'))
  }

  const handleChange = (ev) => {
    setQuery(ev.target.value)
  }

  return (
    <main>
      <section>
        <label htmlFor="query">find countries</label>
        <input type="text" value={query} onChange={handleChange} />
      </section>

      <Error error={error} />
      <CountryList countries={countries} onSelect={handleSelectCountry} />
      <Country country={country} weather={weather} />
    </main>
  )
}

export default App
