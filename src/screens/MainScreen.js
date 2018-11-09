import React from 'react';
import { TabNavigator } from '../config/routes';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TabNavigator />
    );
  }
}

export default (MainScreen);
