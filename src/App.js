import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import AppNav from './components/AppNav'
const CocktailList = React.lazy(() => import('./components/CocktailList'))
const SearchForm = React.lazy(() => import('./components/SearchForm'))
const CocktailDetails = React.lazy(() => import('./components/CocktailDetails'))

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  // const [homeCounter, setHomeCounter] = useState(0)

  return (
    <div className="Random Cocktail App">
      <Router>
        <AppNav />
        {/* Using React Suspense we can add a loading element */}
        {/* While the componenets are rendering */}
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/">
              <SearchForm searchTerm={searchTerm} setter={setSearchTerm} />
              <CocktailList searchTerm={searchTerm} />
            </Route>
            <Route path="/cocktail/:id">
              <CocktailDetails />
            </Route>
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
