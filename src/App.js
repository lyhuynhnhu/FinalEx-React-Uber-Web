import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './redux/reducers/index'
import reportWebVitals from './reportWebVitals';

import LandingPage from './modules/landingpage/landing_page'
import RegisterPhone from './modules/registration/components/registration-phone/register-phone'
import OTP from './modules/registration/components/registration-otp/otp'
import Profile from './modules/registration/components/profile/profile'
import Form from './modules/form/form'
import Booking from './modules/booking-trip/booking'
import StaticPage from './modules/static-page/static-page'

import './App.css';

const middleware = [ thunk ];
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/registration/components/registration-phone/register-phone" component={RegisterPhone} />
            <Route path="/registration/components/registration-otp/otp" component={OTP} />
            <Route path="/registration/components/profile/profile" component={Profile} />
            <Route path="/contact" component={Form} />
            <Route path="/booking" component={Booking} />
            <Route path="/static" component={StaticPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
reportWebVitals();

export default App;
