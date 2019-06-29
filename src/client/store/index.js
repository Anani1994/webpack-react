import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import reducers from './reducer';

const initialState = Map();
const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
