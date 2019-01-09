import React from 'react';
import { YellowBox } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Nav from './src/config/routes';
import reduser from './src/redusers';

// создаем стор
const store = createStore(reduser);
// убираем вывод сообщений о таймере из окна симулятора
YellowBox.ignoreWarnings(['Setting a timer']);
console.ignoredYellowBox = ['Setting a timer'];
const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);

export default App;
