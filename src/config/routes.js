import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from './styles';
import LoadingScreen from '../screens/LoadingScreen';
import JournalScreen from '../screens/JournalScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import StatScreen from '../screens/StatScreen';
import CemeteryScreen from '../screens/CemeteryScreen';
import InfoScreen from '../screens/InfoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import YesterdayScreen from '../screens/YesterdayScreen';
import CreateScreen from '../screens/CreateScreen';

export const TabNavigator = createBottomTabNavigator(

  {

    Journal: {
      screen: JournalScreen,
      navigationOptions: {
        tabBarIcon: () => <MaterialCommunityIcons name="human" size={28} color={colors.black} />,
      },
    },

    Stat: {
      screen: StatScreen,
      navigationOptions: {
        tabBarIcon: () => <MaterialCommunityIcons name="chart-bar" size={28} color={colors.black} />,
      },
    },

    Cemetery: {
      screen: CemeteryScreen,
      navigationOptions: {
        tabBarIcon: () => <MaterialCommunityIcons name="skull" size={28} color={colors.black} />,
      },
    },

    Info: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarIcon: () => <MaterialCommunityIcons name="information-outline" size={28} color={colors.black} />,
      },
    },

    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: () => <MaterialCommunityIcons name="account-circle" size={28} color={colors.black} />,
      },
    },
  },

  {
    tabBarOptions: {
      activeTintColor: colors.red,
      inactiveTintColor: colors.black,
      showLabel: false,
      style: {
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.middleGrey,
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

const AuthNav = createStackNavigator(
  {
    Loading: LoadingScreen,
    Login: LoginScreen,
    Journal: MainNav,
    Registration: RegistrationScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Loading',
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
