import React from "react";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav>
      <div className="nav-wrapper red">
        <NavLink to="/" className="brand-logo center black-text">
          Cocktail App
        </NavLink>
        <ul id="nav-mobile" className="right">
          <li>
            <NavLink className="black-text" to="/">Home</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AppNav;
