import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import useLocalStorageState from './hooks/useLocalStorageState'
import AppNav from './components/AppNav'
const CocktailList = React.lazy(() => import('./components/CocktailList'))
const SearchForm = React.lazy(() => import('./components/SearchForm'))
const CocktailDetails = React.lazy(() => import('./components/CocktailDetails'))
const InstallBanner = React.lazy(() => import('./components/InstallBanner'))
const SavedCocktailList = React.lazy(() => import('./components/SavedCocktailList'))

function App() {
  // using use State we can set the searchTerm and read the search term in multiple components
  const [searchTerm, setSearchTerm] = useState('')
  const [savedDrinks, setSavedDrinks] = useLocalStorageState("COCKTAILAPP-SAVED", [])

  return (
    <div className="Random Cocktail App">
      <Router>
        <AppNav />
        {/* Using React Suspense we can add a loading element */}
        {/* While the componenets are rendering */}
        <Switch>
          {/* If it takes too long for an element to load we will show a loading message */}
          <Suspense fallback={<div>Loading...</div>}>

            {/* Route for the home page */}
            <Route exact path="/">
              <InstallBanner />
              <SearchForm searchTerm={searchTerm} setter={setSearchTerm} />
              <CocktailList searchTerm={searchTerm} />
            </Route>
            {/* Route for the cocktail details page */}
            <Route path="/cocktail/:id">
              {/* To check if the drink is already saved or to save a new drink send the props data and setter */}
              <CocktailDetails data={savedDrinks} setter={setSavedDrinks} />
            </Route>

            {/* Route for the saved list */}
            <Route path="/saved">
              {/* To check the drink list or to delete a drink send props data and setter */}
              <SavedCocktailList data={savedDrinks} setter={setSavedDrinks} />
            </Route>
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
