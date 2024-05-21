function Country({country, weather}) {
	return country && weather && (
		<article>
			<CountryInfo country={country} />
			<WeatherInfo weather={weather} capital={country.capital[0]} />
		</article>
  )
}

function CountryInfo({country}) {
  return (
    <section>
      <h1>{country.name.common}</h1>
			<p>capital {country.capital[0]}</p>
			<p>area {country.area}</p>

			<h4>languages:</h4>
			<ul>
			{Object.values(country.languages).map(lang => (
				<li key={lang}>{lang}</li>
			))}
			</ul>

			<img src={country.flags.svg} width="128px" alt={country.name.common} />
    </section>
  )
}

function WeatherInfo({weather, capital}) {
  return (
    <section>
			<h1>Weather in {capital}</h1>
			<p>temperature {weather.temp} Celsius</p>
			<img src={weather.icon} />
			<p>wind {weather.wind} m/s</p>
    </section>
  )
}

export default Country