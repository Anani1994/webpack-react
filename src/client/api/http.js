import axios from 'axios';

const http = {};

http.get = (url, data = {}, options = {}) => {
  const config = Object.assign({ params: data }, options);
  return new Promise((resolve, reject) => {
    axios
      .get(`api/${url}.json`, config) // 在 url 后添加后缀以在 github 上成功获取数据
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export default http;
