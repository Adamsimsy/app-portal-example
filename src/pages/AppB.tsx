import React, { FC } from 'react';
import logo from '../logo.svg';

export const AppB: FC<any> = ({ }) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        App B
      </p>
    </header>
  );
};