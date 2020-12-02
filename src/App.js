import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
const AppNav = React.lazy(() => import('./components/AppNav'))
const CocktailList = React.lazy(() => import('./components/CocktailList'))
const SearchForm = React.lazy(() => import('./components/SearchForm'))
const CocktailDetails = React.lazy(() => import('./components/CocktailDetails'))
const InstallBanner = React.lazy(() => import('./components/InstallBanner'))

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  // const [homeCounter, setHomeCounter] = useState(0)

  return (
    <div className="Random Cocktail App">
      <Router>
        {/* Using React Suspense we can add a loading element */}
        {/* While the componenets are rendering */}
        {/* If it takes too long for an element to load we will show a loading message */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* Show the app navigation bar  */}
          <AppNav />

          <Switch>


            {/* Route for the home page */}
            <Route exact path="/">
              <InstallBanner />
              <SearchForm searchTerm={searchTerm} setter={setSearchTerm} />
              <CocktailList searchTerm={searchTerm} />
            </Route>

            {/* Route for the cocktail details page */}
            <Route path="/cocktail/:id">
              <CocktailDetails />
            </Route>

          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
