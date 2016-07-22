import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <MenuItem route="app" text="Home" />
          <MenuItem route="dashboard" text="Dashboard" />
          <MenuItem route="dash" text="Dash" />
        </ul>
      </header>
    );
  }
}

module.exports = Menu;
