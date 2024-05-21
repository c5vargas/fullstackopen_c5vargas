function BasicButton({label, onClick}) {
	return (
		<button type="button" onClick={onClick}>{label}</button>
	)
}

export default BasicButton