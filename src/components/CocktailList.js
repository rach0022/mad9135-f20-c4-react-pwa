import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchCocktail from "../helpers/cocktail.service";
function CocktailList({ searchTerm }) {
  const [cocktailList, setCocktailList] = useState([]);

  // callback function to go to

  //when the search term changes we make a new fetch and if it fails or not we set the searchTerm
  useEffect(() => {
    fetchCocktail({ getList: true, search: searchTerm })
      .then(setCocktailList)
      .catch((err) => setCocktailList(""));
  }, [searchTerm]);

  // now with the list we can created the cocktail elements to display
  let cocktailElements = null;
  if (cocktailList.drinks) {
    cocktailElements = cocktailList.drinks.map((cocktail) => (
      <Link to={`/cocktail/${cocktail.idDrink}`}>
        <div key={cocktail.idDrink} className="cocktail">
          <p>{cocktail.strDrink}</p>
          <img src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink}`} />
        </div>
      </Link>
    ));
  } else {
    cocktailElements = <div>Search for a valid alcoholic ingredient</div>;
  }

  // return the cocktail elements
  return <div>{cocktailElements}</div>;
}

export default CocktailList;
