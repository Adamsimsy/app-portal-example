import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { AppRoutes } from './apps/AppRoutes'

const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <AppRoutes />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
