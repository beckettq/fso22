import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './components/Search'
import Display from './components/Display'

function App() {
  const [searchQuery, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const updateQuery = (event) => {
    setQuery(event.target.value)
  }

  const hook = () => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
    setCountries(response.data)
  })

  }
  useEffect(hook, [])


  return (
    <div>
        <Search controller = {searchQuery} updater = {updateQuery}></Search>
        <Display array = {countries} query = {searchQuery}></Display>
    </div>
  );
}

export default App
