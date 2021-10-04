import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { PortalAppBar } from './components/PortalAppBar'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { AppA } from './pages/AppA'
import { AppB } from './pages/AppB'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PortalAppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/app/a" component={AppA} />
          <Route exact path="/app/b" component={AppB} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
