import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './Login';
import Loader from './Loader';

const App = () => (
  <div>
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </Router>
    </Suspense>
  </div>
);

export default App;
