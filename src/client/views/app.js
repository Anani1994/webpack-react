import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import LocaleProvider from '../i18n';
import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <LocaleProvider>
      <TodoList />
    </LocaleProvider>
  </Provider>
);

export default App;
