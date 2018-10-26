import React from 'react';
import { Provider } from 'react-redux';
import configStore from './src/config/store';
import Nav from './src/config/routes';

const store = configStore;

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);

export default App;