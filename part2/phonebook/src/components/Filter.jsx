function Filter({filter, onChange}) {
	return (
    <div>
      <label htmlFor="search-input">filter shown with</label>
      <input type="text" value={filter} id="search-input" onChange={onChange} />
    </div>
  )
}

export default Filter