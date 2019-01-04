import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { auth } from '../config/firebase';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: 'demo1',
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => auth.signOut()}
        >
          <Text>
            SignOut
          </Text>
        </TouchableOpacity>
        <Text>Test screen</Text>
      </View>
    );
  }
}

export default (ProfileScreen);
