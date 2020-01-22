import React from 'react';


import { BrowserRouter as Router, Switch, Route, Link }from 'react-router-dom'
import SavedPage from './pages/SavedPage'
import SearchPage from './pages/SearchPage'

// import './App.css';

const App = () => {


  return (

<Router>
  <div>
    <Switch>
        <Route exact path='/'>
            <SearchPage />
        </Route>
        <Route path='/saved'>
          <SavedPage />
        </Route>
    </Switch>
  </div>
</Router>
  )
}

export default App;
