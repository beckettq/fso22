import React from 'react'

const Display = ({ array, query }) => {
    const displaySingle = (country) => {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <div>capital: {country.capital}</div>
                <div>area: {country.area}</div>
                <h3>languages:</h3>
                <ul>
                    {Object.entries(country.languages).map(lang => <li key = {lang[1]}>{lang[1]}</li>)}
                </ul>
                <img src = {country.flags.png}></img>
            </div>
            
            
        )
    }



    const filterWithin = (arr, search) => {
        search = search.toUpperCase()
        const filterCheck = (country) => {
            const name = country.name.common.toUpperCase()
            return name.indexOf(search) != -1
        }
        arr = arr.filter(filterCheck)
        if (arr.length > 10) {
            return "Too many matches, specify further"
        } else if (arr.length > 1) {
            return arr.map((country => <div key = {country.name.common}>{country.name.common}</div>))
        } else if (arr.length > 0) {
            return displaySingle(arr[0])
        }
      }

    return (
    <div>
        <div>
            {filterWithin(array, query)}
        </div>
    </div>)
}

export default Display