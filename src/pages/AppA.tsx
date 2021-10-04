import React, { VFC } from 'react';
import logo from '../logo.svg';

export const AppA: VFC = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        App A
      </p>
    </header>
  );
};