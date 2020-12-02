import React from 'react'
import { Link } from 'react-router-dom'

export default function SavedCocktailList({ data, setter }) {
    // first check if we have data, if we do not return an empty list
    if (!data || data.length === 0) return (
        <div className="SavedCocktailList">
            <ul className="collection with-header">
                <li className="collection-header dark-shade"><h4>Saved Drink List</h4></li>
                <li className="collection-item dark-shade"><h4>Empty</h4></li>
            </ul>
        </div>
    )

    // if we do have data return the list 
    // first map out the new cocktail list elements
    const savedDrinkElements = data.map((cocktail, index) =>
        <div className="col s12 m6 l4" key={`${cocktail.idDrink}-${index}`}>
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

    return (
        <div className="SavedCocktailList">
            <ul className="container">
                <h4>Saved Drink List</h4>
                <div className="row">{savedDrinkElements}</div>
            </ul>
        </div>
    )
}
