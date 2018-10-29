import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/JournalScreen';
import RegistrationScreen from '../screens/RegistrationScreen'
import TestScreen from '../screens/TestScreen';
//тут мы создаем навигацию



const LogInNav = createStackNavigator(
    {
      Home: HomeScreen,
      Journal: JournalScreen,
      Registration: RegistrationScreen,
      Test: TestScreen,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Registration',
    }
  );

export default class Nav extends React.Component {
    render() {
        return <LogInNav />;
    }
  }


// export default createStackNavigator(

//     {
//         Home: HomeScreen,
//         Journal: JournalScreen,

//     },
//     //отключаем дефолтный хедер
//     //устанавливаем стартовую страницу
//     {
//         headerMode: 'none',
//         initialRouteName: 'Journal',
//     }

// )