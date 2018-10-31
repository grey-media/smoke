import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoadingScreen from '../screens/Loadingcreen';
import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/JournalScreen';
import RegistrationScreen from '../screens/RegistrationScreen'
import LoginScreen from '../screens/LoginScreen'
import TestScreen from '../screens/TestScreen';
//тут мы создаем навигацию


const AuthNav = SwitchNavigator(
    {
        LoadingScreen,
        HomeScreen,
        LoginScreen,
        RegistrationScreen,
        JournalScreen
    },
    {
        initialRouteName: 'Loadingcreen'
    }
)

const LogInNav = createStackNavigator(
    {
        Home: HomeScreen,
        Journal: JournalScreen,
        Login: LoginScreen,
        Registration: RegistrationScreen,
        Test: TestScreen,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }
  );

export default class Nav extends React.Component {
    render() {
        return <AuthNav />;
    }
  }