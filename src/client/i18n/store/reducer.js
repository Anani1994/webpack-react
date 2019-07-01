import { Map } from 'immutable';
import CHANGE_LANG from './actionTypes';

// 默认数据
const defaultState = Map({
  lang: navigator.language,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return state.set('lang', action.lang);
    default:
      return state;
  }
};

export default reducer;
