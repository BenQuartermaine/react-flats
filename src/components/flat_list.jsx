import React, { Component } from 'react';
import Flat from './flat.jsx'
import flats from '../../data/flats.js'

class FlatList extends Component {
  constructor(props) {
    // QQQ: What is super doing?
    super(props)
    this.state = {
    // Blah
    };
  };

  renderFlats = (props) => {
    return this.props.flats.map((flat, i) => <Flat name={flat.name}price={flat.price} url={flat.imageUrl} currency={flat.priceCurrency} key={i}  />)
  };

  render() {
    return (
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    )
  }
}

export default FlatList;