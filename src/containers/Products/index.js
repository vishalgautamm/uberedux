import React, { Component } from 'react';
import './Products.css';
import { connect } from 'react-redux';

class Products extends Component {
  render() {
    return (
      <div>
        Products
      </div>
    )
  }
}

export default connect()(Products);
