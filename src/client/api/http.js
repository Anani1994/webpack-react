import axios from 'axios';

const http = {};

http.get = (url, data = {}, options = {}) => {
  const config = Object.assign({ params: data }, options);
  return new Promise((resolve, reject) => {
    axios
      .get(`api/${url}`, config)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export default http;
