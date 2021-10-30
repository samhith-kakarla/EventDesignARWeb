import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { LandingPage, SignUpPage } from '../UserFlow';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Router>
        <div className="text-gray-100 bg-white shadow-md body-font sticky top-0 z-50">
          <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
            <div className="title-font font-medium text-gray-700 mb-0">
              <Link to="/" className="flex items-center">
                <span className="ml-3 text-xl">GitHub Trends</span>
              </Link>
            </div>
            <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
              
            </nav>
          </div>
        </div>
        <section className="flex-grow">
          <Switch>
            <Route path="/signup" component={SignUpPage} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </section>
        <footer className="body-font">
          <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5">
              <p className="text-gray-500 text-sm text-center">
                © 2021 GitHub Trends
              </p>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  )
};

export default App;