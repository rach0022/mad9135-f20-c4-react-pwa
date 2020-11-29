import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchCocktail from "../helpers/cocktail.service";
function CocktailList({ searchTerm }) {
  // create the cocktail list and the setter function
  const [cocktailList, setCocktailList] = useState([]);

  //when the search term changes we make a new fetch and if it fails or not we set the searchTerm
  useEffect(() => {
    fetchCocktail({ getList: true, search: searchTerm })
      .then(setCocktailList)
      .catch(err => setCocktailList(""));
  }, [searchTerm]);

  // now with the list we can create the cocktailElements to display by checking if we have the
  // cocktailList.drinks object otherwise we can return an empty

  const randomNum = (cocktailList.drinks) ? Math.floor(Math.random() * (cocktailList.drinks.length - 3) + 0) : 0;

  let cocktailElements = cocktailList.drinks ? (
    cocktailList.drinks
      .map(cocktail => (
        <Link to={`/cocktail/${cocktail.idDrink}`}>
          <div key={cocktail.idDrink} className="cocktail">
            <p>{cocktail.strDrink}</p>
            <img src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink}`} />
          </div>
        </Link>
      ))
      .splice(randomNum, randomNum + 10)
  ) : (
      <div>Search for a valid alcoholic ingredient</div>
    );

  // return the cocktail elements
  return <div>{cocktailElements}</div>;
}

export default CocktailList;
