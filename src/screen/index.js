import { createStackNavigator} from 'react-navigation'
import HomeScreen from './homeScreen'
import JournalScreen from './journalScreen'
import {
    SK_HOME,
    SK_JOURNAL
} from '../routes'

export default createStackNavigator(

    {
        Home: HomeScreen,
        Journal: JournalScreen,

    },
    //отключаем дефолтный хедер
    //устанавливаем стартовую страницу
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }

)






// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

// class HS extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.push('Details')}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

// const RootStack = StackNavigator(
//   {
//     Home: {
//       screen: HS,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'Home',
//   }
// );

// export default class HomeScreen extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }