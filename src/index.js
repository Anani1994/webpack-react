import React from "react";
import ReactDOM from "react-dom";
import './styles/app.less';

import logo from './static/images/logo.png';

const App = () => {
  return (
    <div>
      <p>Hello world</p>
      <img src={logo} alt="logo"/>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));