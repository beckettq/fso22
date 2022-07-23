import React from 'react'

const Search = ({controller, updater}) =>{
    return (
        <div>find countries <input value = {controller} onChange = {updater}></input></div>
    )
}

export default Search