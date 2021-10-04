import React, { FC } from 'react';
import logo from '../logo.svg';

export const AppA: FC<any> = ({ }) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        App A
      </p>
    </header>
  );
};