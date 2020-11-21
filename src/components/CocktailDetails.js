import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchCocktail from '../helpers/cocktail.service'

function CocktailDetails() {
    const { id } = useParams()
    const [cocktail, setCocktail] = useState([])

    useEffect(() => {
        fetchCocktail({ getList: false, search: `${id}` }).then(setCocktail).catch(err => setCocktail(''))
    }, [id])

    let cocktailElements = null
    if (cocktail.drinks) {
        cocktailElements = cocktail.drinks.map(cocktail => {
            let ingrediants = []
            for (let i = 1; i <= 15; i++) {
                console.log(cocktail[`strIngredient1`])

                if (cocktail[`strIngredient${i}`] !== null) {
                    ingrediants.push([cocktail[`strIngredient${i}`], cocktail[`strMeasure${i}`]])
                }
            }

            const ingrediantElements = ingrediants.map(ingrediant =>
                <p key={`ingrediant-${ingrediant}`}>{ingrediant}</p>
            )

            return (<div key={cocktail.idDrink} className="cocktail">
                <img src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink}`} />
                <h1>{cocktail.strDrink}</h1>
                <p>{cocktail.strInstructions}</p>
                {ingrediantElements}
            </div>)
        })
    }

    return (
        <div>
            {cocktailElements}
        </div>
    )
}

export default CocktailDetails
