import React, { VFC } from 'react';
import logo from '../logo.svg';

const AppB: VFC = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        App B
      </p>
    </header>
  );
};
export default AppB;