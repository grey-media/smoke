import React from 'react';
import { TabNavigator, MainNav } from '../config/routes';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MainNav />
    );
  }
}

export default (MainScreen);
