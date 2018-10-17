import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={st.mainWrapper}>
        <ImageBackground source={require('./image/top-bg.png')} style={st.header}>
          <Text style={st.title}>Регистрация</Text>
        </ImageBackground>
        <View style={st.mainWrapper}>
          <View style={st.mainLogo}>
            <Text style={st.logoText}>SmokeKiller</Text>
            <Text style={st.logoSlogan}>СПАСИ СЕБЯ ОТ СИГАРЕТ</Text>
          </View>
          <View style={st.mainReg}>
            <Text>Registrations</Text>
          </View>
        </View>
      </View>
    );
  }
}

//style
const st = StyleSheet.create({
  header: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#f3e055',
    fontSize: 20,
    fontWeight: '600',
    marginTop: -30,
  },
  logoText: {
    fontSize: 50,
    fontWeight: '600',
    color: '#7e7441',
    borderBottomWidth: 10,
    borderBottomColor: '#7e7441',
  },
  logoSlogan: {
    color: '#7e7441',
    fontSize: 22,
    fontWeight: '300',
    paddingTop: 5,
  },
  mainWrapper:{
    flex: 1,
  },
  mainLogo: {
    flex: 1,
    backgroundColor: '#fae146',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainReg: {
    flex: 1.5,
  }
});