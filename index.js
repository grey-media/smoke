import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
//подключаем (регистрируем) приложение
AppRegistry.registerComponent(appName, () => App)