import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchCocktail from '../helpers/cocktail.service'

function CocktailDetails({ data, setter }) {
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

    // create a callback function to add a drink to the data array or delete it depending on the state of the saved
    const savedCocktailCallback = ev => {
        ev.preventDefault()
        // check if the cocktail is in the array if it isnt then add it to the array, else delete from the array 
        let targetID = data.findIndex(drink => drink.idDrink === id)
        console.log(targetID, data, cocktail)
        if (targetID === -1) {
            setter([...data, cocktail.drinks[0]]) // add to the array
            ev.currentTarget.textContent = 'Delete'
        } else {
            data.splice(targetID, 1) //delete from the array 
            setter([...data])
            ev.currentTarget.textContent = 'Save'
        }
    }

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
                                <p className="card-title">Category: <span className="text-muted">{cocktail.strCategory || "none"}</span></p>
                                <p className="card-title">{cocktail.strAlcoholic}</p>
                                <p className="card-title">Glass: <span className="text-muted">{cocktail.strGlass || "any"}</span></p>
                                {/* <p className="card-title" title="The category of drink">{cocktail.strCategory}</p>
                                <p className="card-title" title="The alcoholic type of this drink">{cocktail.strAlcoholic}</p>
                                <p className="card-title" title="Type of Glass">{cocktail.strGlass}</p> */}
                                <p className="card-title">Instructions:</p>
                                <p>{cocktail.strInstructions}</p>
                                <p className="card-title">Ingredients:</p>
                                {ingrediantElements}
                                <div className="card-action">
                                    <button onClick={savedCocktailCallback} className="btn btn-info waves-effect">Save</button>
                                </div>
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
