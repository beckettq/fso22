import { useEffect, useState } from 'react'
import Display from './components/display'
import FormInput from './components/add'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, changeSearch] = useState('')

  const hook = () => {
    axios.get("http://localhost:3001/persons")
    .then(response => {
      console.log(response.data)
    setPersons(response.data)
   }
  )}

  useEffect(hook, [])


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