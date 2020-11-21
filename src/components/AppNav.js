import React from 'react'
import { NavLink } from 'react-router-dom'

function AppNav() {
    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo">Cocktail App</NavLink>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default AppNav
