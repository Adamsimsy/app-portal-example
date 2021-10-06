import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'

const Dashboard = lazy(() => import('./pages/Dashboard'));
const AppA = lazy(() => import('./pages/AppA'));
const AppB = lazy(() => import('./pages/AppB'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/app/a" component={AppA} />
            <Route exact path="/app/b" component={AppB} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
