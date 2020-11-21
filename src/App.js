import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';

import './App.css';
import AppNav from './components/AppNav'
import CocktailList from './components/CocktailList'
import SearchForm from './components/SearchForm'

function App() {
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <div className="Random Cocktail App">
      <Router>
        <AppNav />
        <SearchForm searchTerm={searchTerm} setter={setSearchTerm} />

        <Switch>
          <Route exact path="/">
            <CocktailList searchTerm={searchTerm} />
          </Route>
          <Route path="/details">
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
