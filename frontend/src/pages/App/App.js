import React from 'react';

import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { TabsNavigation, HeaderBar } from '../../navigation'; 
import { LandingPage, SignUpPage } from '../UserFlow';
import { HomePage } from '../Home';
import { CameraPage } from '../Camera';

function App() {
  const userId = useSelector((state) => state.user.userId);
  const isAuthenticated = userId && userId.length > 0;

  return (
    <div className="bg-gray-one h-screen flex flex-col">
      <Router>
        {isAuthenticated && (
          <HeaderBar />
        )}
        <section className="flex-grow">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/camera" component={CameraPage} />
          </Switch>
        </section>
        {isAuthenticated && (
          <TabsNavigation />
        )}
        <footer className="body-font">
          <div className="bg-gray-two">
            <div className="container mx-auto py-4 px-5">
              <p className="text-gray-three text-sm text-center">
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