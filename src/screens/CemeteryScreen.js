import React from 'react';
import { View, Text } from 'react-native';


class CemeteryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>+++ CemeteryScreen +++</Text>
      </View>
    );
  }
}


export default (CemeteryScreen);
