import React from 'react';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../config/styles';
import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/JournalScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import StatScreen from '../screens/StatScreen';
import CemeteryScreen from '../screens/CemeteryScreen';
import InfoScreen from '../screens/InfoScreen';
import TestScreen from '../screens/TestScreen';
import MainScreen from '../screens/MainScreen';
import YesterdayScreen from '../screens/YesterdayScreen';
// тут мы создаем навигацию


const AuthNav = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Home: HomeScreen,
    Login: LoginScreen,
    Journal: MainScreen,
    Registration: RegistrationScreen,
  },
  {
    initialRouteName: 'Loading',
  },
);

export const TabNavigator = createBottomTabNavigator(

  {

    Journal: {
      screen: JournalScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="human" size={28} color={tintColor} />,
      },
    },

    Stat: {
      screen: StatScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="chart-bar" size={28} color={tintColor} />,
      },
    },

    Cemetery: {
      screen: CemeteryScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="skull" size={28} color={tintColor} />,
      },
    },

    Info: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="information-outline" size={28} color={tintColor} />,
      },
    },

  },

  {
    tabBarOptions: {
      activeTintColor: colors.red,
      inactiveTintColor: colors.textColor,
      showLabel: false,
      style: {
        backgroundColor: colors.yellow,
        borderTopWidth: 1,
        borderTopColor: 'white',
      },
    },
  },
);

export const MainNav = createStackNavigator(
  {
    Journal: JournalScreen,
    Yesterday: YesterdayScreen,
    Tab: TabNavigator,
  },
  {
    initialRouteName: 'Tab',
    headerMode: 'none',
  },
);
export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AuthNav />;
  }
}
