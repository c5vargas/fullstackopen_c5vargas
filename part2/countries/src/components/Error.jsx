function Error({error}) {
	return error && (
		<section>
			<span>{error}</span>
		</section>
	)
}

export default Error