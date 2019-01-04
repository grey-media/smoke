import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { auth } from '../config/firebase';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    // auth.signOut()
    // если пользователь не активирован перенаправляем на авторизацию
    // если авторизирован - на журнал
    auth.onAuthStateChanged((user) => {
      navigation.navigate(user ? 'Journal' : 'Registration');
    });
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default LoadingScreen;
