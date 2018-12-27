import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import store from '../../store';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    const { text } = this.state;
    this.text = text;
  }

  render() {
    return (
      <div>
        <FormattedMessage id="helloWorld" />
        <div>{this.text}</div>
        <Link to="/product">go</Link>
      </div>
    );
  }
}

export default Home;
