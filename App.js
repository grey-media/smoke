import React from 'react';
import Nav from './src/config/routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reduser from './src/redusers';

const store = createStore(reduser);

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);

export default App;
