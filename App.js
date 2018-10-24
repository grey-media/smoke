import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/config/store'
import Nav from './src/config/routes'


// Главный файл приложения. Должен определить какую страницу грузить
// Должен сконектить приложение со стором редакс

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
)

export default App