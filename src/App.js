import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import fetchCocktail from './helpers/cocktail.service'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [cocktailList, setCockTailList] = useState([])

  useEffect(() => {
    if (!cocktailList) return
    fetchCocktail({ getList: true, search: 'gin' }).then(setCockTailList)

  }, [])

  let cocktailElements = null
  if (cocktailList.drinks) {
    cocktailElements = cocktailList.drinks.map(cocktail =>
      <div key={cocktail.idDrink} className="cocktail">
        <p>{cocktail.strDrink}</p>
        <img src={cocktail.strDrinkThumb} alt="the cocktail image" />
      </div>
    )
  }

  return (
    <div className="Random Cocktail App">
      {cocktailElements}
    </div>
  );
}

export default App;
