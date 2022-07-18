import { useState } from 'react'
import Display from './components/display'
import FormInput from './components/add'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, changeSearch] = useState('')

  const handleSearch = (event) => {
    changeSearch(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  
  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.every((person) => person.name != newName)) {
      alert(`${newName} is already in the phonebook.`)
    } else {
      let person = {name: newName, number: newNumber}
      setPersons(persons.concat(person))
    }
    setNewName('')
    setNewNumber('')
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <FormInput name = 'search by name' controller = {searchTerm} changeHandler = {handleSearch}></FormInput>
      <h2>Add Someone New</h2>
      <form onSubmit = {addPerson}>
        <FormInput name = 'name' controller = {newName} changeHandler = {handleNewName}></FormInput>
        <FormInput name = 'number' controller = {newNumber} changeHandler = {handleNewNumber}></FormInput>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Display search = {searchTerm} persons = {persons}></Display>
    </div>
  )
}

export default App