import React, { VFC } from 'react';
import logo from '../logo.svg';

export const Dashboard: VFC = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Dashboard
      </p>
    </header>
  );
};