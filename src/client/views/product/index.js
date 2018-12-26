import React from 'react';
import PropTypes from 'prop-types';
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
    const { typeCheck } = this.props;
    return <div>{status} &gt; {typeCheck}</div>;
  }
}

Product.propTypes = {
  typeCheck: PropTypes.string.isRequired,
};

export default Product;
