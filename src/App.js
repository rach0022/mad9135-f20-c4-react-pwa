import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import AppNav from './components/AppNav'
import CocktailList from './components/CocktailList'
import SearchForm from './components/SearchForm'
import CocktailDetails from './components/CocktailDetails'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  // const [homeCounter, setHomeCounter] = useState(0)

  return (
    <div className="Random Cocktail App">
      <Router>
        <AppNav />
        <Switch>
          <Route exact path="/">
            <SearchForm searchTerm={searchTerm} setter={setSearchTerm} />
            <CocktailList searchTerm={searchTerm} />
          </Route>
          <Route path="/cocktail/:id">
            <CocktailDetails />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
