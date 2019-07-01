import CHANGE_LANG from './actionTypes';

const getChangeLang = lang => ({
  type: CHANGE_LANG,
  lang,
});

export default getChangeLang;
