import React from 'react'

function SearchForm({ searchTerm, setter }) {
    // when the form gets submitted we want to prevent the default actions
    // maybe display a spinner when it is loading?
    const submitSearchTerm = ev => {
        ev.preventDefault()
    }

    // return the form and use the searchTerm as the value and set the value with the setter
    return (
        <form type="submit" onSubmit={submitSearchTerm}>
            <input type="text" value={searchTerm} onChange={ev => setter(ev.target.value)} placeholder="Please search for an alcoholic ingrediant" />
        </form>
    )
}

export default SearchForm
