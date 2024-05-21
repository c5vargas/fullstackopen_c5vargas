function Content({parts}) {
	return (
		<article>
			<ul>
				{ parts.map(el => (
					<Part key={el.name} part={el}/>
				))}
			</ul>
		</article>
	)
}

function Part({part}) {
	return <li> {part.name} {part.exercises}</li>
}

export default Content