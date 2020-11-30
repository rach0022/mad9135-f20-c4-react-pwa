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
    console.log(cocktail)
    return (
        <div className="container">
            <h1>Welcome to the Random Cocktail App</h1>
            <h4>Search for an alcoholic ingrediant like "sugar" or "gin" and get a random cocktail like below</h4>
            <div className="col">
                {cocktailElement}
            </div>
        </div>
    )
}

export default RandomCocktail
