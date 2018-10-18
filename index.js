import {AppRegistry} from 'react-native'
//import App from './App'
import HomeScreen from './src/homescreen/homeScreen'
import {name as appName} from './app.json'
//подключаем (регистрируем) приложение
AppRegistry.registerComponent(appName, () => HomeScreen)