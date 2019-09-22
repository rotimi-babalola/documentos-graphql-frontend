import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { PageHeader } from 'antd';
import Loader from './Loader';
import { Login, Signup } from '../pages';

const App = () => (
  <div>
    <Suspense fallback={<Loader />}>
      <Router>
        <PageHeader onBack={() => null} title="Documentos" backIcon={false} />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </Suspense>
  </div>
);

export default App;
