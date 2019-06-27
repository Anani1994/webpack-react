import axios from 'axios';
import config from './config';

const init = () => {
  axios.defaults.baseURL = config.baseURL;
  axios.defaults.timeout = config.timeout;
  axios.defaults.headers['Content-Type'] = config.contentType;
};

export default init;
