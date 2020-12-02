import React, { useState, useEffect } from 'react'
import fetchCocktail from "../helpers/cocktail.service";

function RandomCocktail({ mappingFunction }) {
    // first lets use useEffect with no depandancies (so on first render to get a random cocktail)
    //when the search term changes we make a new fetch and if it fails or not we set the searchTerm
    const [cocktail, setCocktail] = useState(null)

    useEffect(() => {
        fetchCocktail({ getList: true, random: true })
            .then(setCocktail)
            .catch((err) => setCocktail(null));
    }, []);

    // create the cocktail element using hte supplied mapping function
    const cocktailElement = cocktail ? cocktail.drinks.map(mappingFunction) : null

    // return the random drink which will be rendered as the home page when the search list is empty
    // using the values of strIngredient1 and 2 we can render them as possible search choices or display sugar and gin
    // if they dont exist
    return (
        <div className="RandomCocktail container">
            <h3 className="">Welcome to the Random Cocktail App</h3>
            <h6 className="">Search for an alcoholic ingredient like "{cocktail?.drinks[0].strIngredient1 || 'sugar'}" or "{cocktail?.drinks[0].strIngredient2 || "gin"}" and get a random cocktail like below</h6>
            {cocktailElement}
        </div>
    )
}

export default RandomCocktail
