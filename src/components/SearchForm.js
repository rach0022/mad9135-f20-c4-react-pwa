import React, { useState } from 'react'

function SearchForm({ searchTerm, setter }) {
    const submitSearchTerm = ev => {
        ev.preventDefault()
    }

    return (
        <form type="submit" onSubmit={submitSearchTerm}>
            <input type="text" value={searchTerm} onChange={ev => setter(ev.target.value)} placeholder="Please search for an alcoholic ingrediant" />
        </form>
    )
}

export default SearchForm
