import React from 'react'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Header from './modules/shared_component/header/header'
import Footer from './modules/shared_component/footer/footer'
import LandingPage from './modules/landingpage/landing_page'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
