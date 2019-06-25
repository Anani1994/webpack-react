import { createStore } from 'redux';
import reducers from '../views/TodoList/store/reducer';

const store = createStore(reducers);

export default store;
