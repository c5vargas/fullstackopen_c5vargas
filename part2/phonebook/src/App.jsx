import AddForm from './components/AddForm'
import List from './components/List'
import Notification from './components/Notification'
import Filter from './components/Filter'
import personsService from './services/persons'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [newPerson, setNewPerson] = useState({name: '', number: ''})
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    personsService.getAll().then(response => {
      setPersons(response)
    })
  }, [])

  const getPersons = filter !== ''
    ? persons.filter(person => person.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()))
    : persons

  const handleFilterInput = (ev) => {
    setFilter(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const existsPerson = persons.find(el => el.name === newPerson.name)

    if(existsPerson) {
      const confirm = window.confirm(`${existsPerson.name} is already added to phonebook, replace the old number with a new one?`)
      
      if(confirm) {
        personsService
          .update(existsPerson.id, {...existsPerson, number: newPerson.number})
          .then(response => {
            setPersons(persons.map(person => person.name !== newPerson.name ? person : response))
            handleError(`Updated ${response.name}`, 'success')
          })
          .catch(() => {
            setPersons(persons.filter(el => el.id !== existsPerson.id))
            handleError(`Information of ${existsPerson.name} has already been removed from server`, 'error')
          })
      }
    } 
    else
    {
      personsService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          handleError(`Added ${response.name}`, 'success')
        })
    }

    setNewPerson({name: '', number: ''})
  }

  const handleError = (text, type) => {
    setError({text, type})
    setTimeout(() => {
      setError(null)
    }, 5000);
  }

  const handleDestroy = (person) => {
    const confirm = window.confirm(`Delete ${person.name}?`)

    if(!confirm)
      return

    personsService
      .destroy(person.id)
      .then(() => {
        setPersons(persons.filter(el => el.id !== person.id))
      })
      .catch(() => handleError(`Information of ${person.name} has already been removed from server`, 'error'))
  }

  const handleChange = (newObj) => {
    setNewPerson(newObj)
  }

  return (
    <div>
      <header>
        <h2>Phonebook</h2>
        <Notification error={error} />
        <Filter filter={filter} onChange={handleFilterInput} />
      </header>

      <AddForm newPerson={newPerson} onChange={handleChange} onSubmit={handleSubmit} />
      <List persons={getPersons} onDestroy={handleDestroy} />
    </div>
  )
}

export default App