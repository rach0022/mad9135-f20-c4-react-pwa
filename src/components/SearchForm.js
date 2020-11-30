import React from "react";

function SearchForm({ searchTerm, setter }) {
    // when the form gets submitted we want to prevent the default actions
    // maybe display a spinner when it is loading?
    const submitSearchTerm = (ev) => {
        ev.preventDefault();
    };

    // return the form and use the searchTerm as the value and set the value with the setter
    return (
        <form className="container" type="submit" onSubmit={submitSearchTerm}>
            <div className="input-field col 6">
                <i class="material-icons prefix">local_bar</i>
                <label for="search-bar">Search Alcoholic Ingredient</label>
                <input
                    className="center-align"
                    type="text"
                    value={searchTerm}
                    onChange={(ev) => setter(ev.target.value)}
                    id="search-bar"
                />
            </div>
        </form>
    );
}

export default SearchForm;
