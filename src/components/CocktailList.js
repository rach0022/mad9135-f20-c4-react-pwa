import React, { useState, useEffect } from 'react'
import fetchCocktail from '../helpers/cocktail.service'
function CocktailList({ searchTerm }) {
    const [cocktailList, setCocktailList] = useState([])

    useEffect(() => {
        fetchCocktail({ getList: true, search: searchTerm }).then(setCocktailList).catch(err => setCocktailList(''))
    }, [searchTerm])

    let cocktailElements = null
    if (cocktailList.drinks) {
        cocktailElements = cocktailList.drinks.map(cocktail =>
            <div key={cocktail.idDrink} className="cocktail">
                <p>{cocktail.strDrink}</p>
                <img src={cocktail.strDrinkThumb} alt="the cocktail image" />
            </div>
        )
    } else {
        cocktailElements = (<div>Search for a valid alcoholic ingrediant</div>)
    }

    return (
        <div>
            {cocktailElements}
        </div>
    )
}

export default CocktailList
