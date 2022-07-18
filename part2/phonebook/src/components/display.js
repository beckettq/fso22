import React from 'react'

const Display = ({ persons, search }) => {
    const filterWithin = (arr, search) => {
        search = search.toUpperCase()
        arr = arr.filter((val) => val.name.toUpperCase().indexOf(search) != -1) 
        return arr.map((person) => <div key = {person.name}>{person.name} {person.number}</div>)
      }

    return (<div>
        <h2>Numbers</h2>
    <div>
      {filterWithin(persons, search)}
    </div>
    </div>)
}


export default Display