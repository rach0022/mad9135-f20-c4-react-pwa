import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchCocktail from '../helpers/cocktail.service'

function CocktailDetails() {
    // get the id from the route parameters and set the cocktail to useState initiall for
    // an empty array
    const { id } = useParams()
    const [cocktail, setCocktail] = useState([])

    // now we can fetch the specific cocktail details with the useEffect function
    // and set the depandancies as the id
    useEffect(() => {
        fetchCocktail({ getList: false, search: `${id}` })
            .then(setCocktail)
            .catch(err => setCocktail(''))
    }, [id])

    // now we can create the cocktailElements by checking if we have a cocktail.drinks
    // (From the cocktail api) and then map the cocktail to a specific drink element
    const cocktailElement = cocktail.drinks
        ? cocktail.drinks.map(cocktail => {
            // because the ingrediants and the measurements come in the object
            // cocktail.strIngrediant1...2...etc we can loop through each object
            // and if its not null we will add it into the ingrediants array both the measurement
            // and the ingrediant to display in seperate elements for styling
            let ingrediants = []
            for (let i = 1; i <= 15; i++) {

                if (cocktail[`strIngredient${i}`] !== null) {
                    ingrediants.push([
                        cocktail[`strIngredient${i}`],
                        ' ',
                        cocktail[`strMeasure${i}`]
                    ])
                }
            }
            // to fix the unique key prop I am adding the array index as well (from the paramter idx from .map)
            // because some ingrediants will have the exact same name
            const ingrediantElements = ingrediants.map((ingrediant, idx) => (
                <p key={`ingredient-${ingrediant}-${idx}`}>{ingrediant}</p>
            ))

            // after dealing with the ingrediants array we can return the jsx element of the cocktail
            return (
                <div key={cocktail.idDrink} className='col s12 m7 cocktail'>
                    <h2 className='header'>{cocktail.strDrink}</h2>
                    <div className='card horizontal'>
                        <div className='card-image'>
                            <img
                                src={cocktail.strDrinkThumb}
                                alt={`${cocktail.strDrink}`}
                            />
                        </div>
                        <div className='card-stacked'>
                            <div className='card-content'>
                                <p>{cocktail.strInstructions}</p>
                                {ingrediantElements}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        : null

    // return the cocktailElement which is either empty or has the cocktail details
    return <div className="CocktailDetails">{cocktailElement}</div>
}

export default CocktailDetails
