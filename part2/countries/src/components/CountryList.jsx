function CountryList({countries, onSelect}) {
	return (
		<section>
			{countries.map(el => (
        <article key={el.id}>
          <span>{el.name.common}</span>
          <button type="button" onClick={() => onSelect(el.name.common)}>show</button>
        </article>  
			))}
		</section>
	)
}

export default CountryList