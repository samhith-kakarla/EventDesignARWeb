import React from 'react';

// import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LandingPage, SignUpPage } from '../UserFlow';

function App() {
  return (
    <div className="bg-gray-one h-screen flex flex-col">
      <Router>
        <section className="flex-grow">
          <Switch>
            <Route path="/signup" component={SignUpPage} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </section>
        <footer className="body-font">
          <div className="bg-gray-two">
            <div className="container mx-auto py-4 px-5">
              <p className="text-white text-sm text-center">
                © 2021 Event Design AR
              </p>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  )
};

export default App;