function List({persons, onDestroy}) {
	return (
		<section>
      <h2>Numbers</h2>
      
      { persons.map(person => (
        <ListItem key={person.name} person={person} onDestroy={onDestroy}  />
      ))}
    </section>
	)
}

function ListItem({person, onDestroy}) {
  return (
    <article key={person.name}>
      <span>{person.name} </span>
      <span>{person.number} </span>
      <button onClick={() => onDestroy(person)}>delete</button>
    </article>
  )
}

export default List