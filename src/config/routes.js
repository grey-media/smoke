import React from 'react';
import { createStackNavigator, StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import JournalScreen from '../screens/JournalScreen'
//тут мы создаем навигацию



const LogInNav = createStackNavigator(
    {
      Home: HomeScreen,
      Journal: JournalScreen,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Journal',
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