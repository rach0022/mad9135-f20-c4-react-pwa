import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchCocktail from "../helpers/cocktail.service";
function CocktailList({ searchTerm }) {
  // create the cocktail list and the setter function
  const [cocktailList, setCocktailList] = useState([]);
  const [elements, setElements] = useState(null)
  const numberCards = 10

  //when the search term changes we make a new fetch and if it fails or not we set the searchTerm
  useEffect(() => {
    fetchCocktail({ getList: true, search: searchTerm })
      .then(setCocktailList)
      .catch((err) => setCocktailList(""));
  }, [searchTerm]);

  // now with the list we can create the cocktailElements to display by checking if we have the
  // cocktailList.drinks object otherwise we can return an empty
  const mapCocktailElements = (cocktail) => (
    <div className="col s12 m6 l4" key={cocktail.idDrink}>
      <div className="card">
        <div className="card-image">
          <img src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink}`} />
        </div>
        <div className="card-action">
          <Link to={`/cocktail/${cocktail.idDrink}`}>
            <p className="">{cocktail.strDrink} </p>
          </Link>
        </div>
      </div>
    </div>
  )

  // create a random number for the start of the array 
  const randomNum = cocktailList.drinks
    ? Math.floor(Math.random() * (cocktailList.drinks.length - 3) + 0)
    : 0;

  // map out the cocktail elements
  let cocktailElements = cocktailList.drinks ? (
    cocktailList.drinks
      .map(mapCocktailElements)
      .slice(randomNum, randomNum + numberCards)
  ) : (
      <div>Search for a valid alcoholic ingredient</div>
    );

  // callback function to randomize the drink list and return a new list
  const handleRandomizeClick = ev => {
    ev.preventDefault()
    cocktailElements = cocktailList.drinks.map(mapCocktailElements).slice(randomNum, randomNum + numberCards)
    setElements(Math.random())
  }

  // check if we have a random nubmer set, that means we have cocktail elements and we can render the button, if
  // not we will render nothing
  const buttomHTML = (cocktailList.drinks) ? (<a href="#" className="btn" onClick={handleRandomizeClick}>Randomize</a>) : null
  // return the cocktail elements
  return (
    <div className="container CocktailList">
      {buttomHTML}
      <div className="row">{cocktailElements}</div>
    </div>
  );
}

export default CocktailList;
