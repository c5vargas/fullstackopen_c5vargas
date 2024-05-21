function Notification({error}) {
	return error && (
		<div className={`notify notify-${error.type}`}>
			<span>{error.text}</span>
		</div>
	)
}

export default Notification