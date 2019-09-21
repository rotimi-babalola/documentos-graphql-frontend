import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { PageHeader } from 'antd';
import LoginPage from './Login';
import Loader from './Loader';

const App = () => (
  <div>
    <Suspense fallback={<Loader />}>
      <Router>
        <PageHeader onBack={() => null} title="Documentos" backIcon={false} />
        <Switch>
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </Router>
    </Suspense>
  </div>
);

export default App;
