import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import fetchCocktail from '../helpers/cocktail.service'
function CocktailList ({ searchTerm }) {
  // create the cocktail list and the setter function
  const [cocktailList, setCocktailList] = useState([])

  //when the search term changes we make a new fetch and if it fails or not we set the searchTerm
  useEffect(() => {
    fetchCocktail({ getList: true, search: searchTerm })
      .then(setCocktailList)
      .catch(err => setCocktailList(''))
  }, [searchTerm])

  // now with the list we can create the cocktailElements to display by checking if we have the
  // cocktailList.drinks object otherwise we can return an empty

  const randomNum = Math.floor(Math.random() * 90 + 0)

  let cocktailElements = cocktailList.drinks ? (
    cocktailList.drinks
      .map(cocktail => (
        <div className='col s12 m6 l3' key={cocktail.idDrink}>
          {/* <div className='col s12 m2'> */}
          <div className='card'>
            <div className='card-image'>
              <img src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink}`} />
              <span className='card-title'>{cocktail.strDrink}</span>
            </div>
            <div className='card-action'>
              <Link to={`/cocktail/${cocktail.idDrink}`}>Ingredients</Link>
            </div>
          </div>
          {/* </div> */}
        </div>

        // <Link to={`/cocktail/${cocktail.idDrink}`}>
        //   <div key={cocktail.idDrink} className='cocktail'>
        //     <p>{cocktail.strDrink}</p>
        //     <img src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink}`} />
        //   </div>
        // </Link>
      ))
      .splice(randomNum, randomNum + 10)
  ) : (
    <div>Search for a valid alcoholic ingredient</div>
  )

  // return the cocktail elements
  return (
    <div className='container'>
      <div className='row'>{cocktailElements}</div>
    </div>
  )
}

export default CocktailList
