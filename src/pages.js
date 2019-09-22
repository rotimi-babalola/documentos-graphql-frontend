import { lazy } from 'react';

export const Signup = lazy(() =>
  import(/* webpackChunkName: "Signup" */ './components/Signup.jsx'),
);

export const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ './components/Login'),
);
