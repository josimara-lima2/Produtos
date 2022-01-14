import React from 'react'
import App from './App'

type PrivateRoute = {
  children: React.ReactNode;
};

const PrivateRoutes = ({ children }: PrivateRoute) => {
  return <App>{children}</App>;
};

export default PrivateRoutes
