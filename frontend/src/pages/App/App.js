import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { LandingPage, SignUpPage } from '../UserFlow';

function App() {
  return (
    <div className="bg-black">
      <h1>app</h1>
    </div>
  )
};

export default App;