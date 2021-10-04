import React, { FC } from 'react';
import logo from '../logo.svg';

export const Dashboard: FC<any> = ({ }) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Dashboard
      </p>
    </header>
  );
};