import React from 'react';
import ReactDOM from 'react-dom';
import initHttp from './api';
import App from './views/app';
import './styles/app.less';

initHttp();

ReactDOM.render(<App />, document.getElementById('root'));
