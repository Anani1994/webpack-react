import http from '../http';

const getTodoList = (url, data, options) => http.get(url, data, options).then(res => res);

export default getTodoList;
