import React from 'react';
import { View, Text } from 'react-native';


class StatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>StatScreen</Text>
      </View>
    );
  }
}


export default (StatScreen);
