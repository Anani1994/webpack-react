import React from 'react';
import getData from '../../api/data';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'pending',
    };
  }

  componentDidMount() {
    getData().then((res) => {
      this.setState({
        status: res.statusText,
      });
    });
  }

  render() {
    const { status } = this.state;
    return <div>{status}</div>;
  }
}

export default Product;
