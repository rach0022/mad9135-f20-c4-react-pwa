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
      <div className="col 6">
        <input
          className="center-align"
          type="text"
          value={searchTerm}
          onChange={(ev) => setter(ev.target.value)}
          placeholder="Please search for an alcoholic ingredient"
        />
      </div>
    </form>
  );
}

export default SearchForm;
