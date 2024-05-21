function AddForm({newPerson, onSubmit, onChange}) {
	const handleNewNameInput = (ev) => {
		const newObj = {
			...newPerson,
      name: ev.target.value
		}
		onChange(newObj)
  }
	
  const handleNewPhoneInput = (ev) => {
    const newObj = {
      ...newPerson,
      number: ev.target.value
    }
    onChange(newObj)
  } 

	return (
		<main>
			<h2>add a new</h2>
			<form onSubmit={onSubmit}>
			<div>name: <input value={newPerson.name} onChange={handleNewNameInput} /></div>
			<div>number: <input value={newPerson.number} onChange={handleNewPhoneInput} /></div>
			<div>
				<button type="submit">add</button>
			</div>
			</form>
		</main>
	)
}

export default AddForm