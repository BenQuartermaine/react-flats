import React, { Component } from 'react';
import FlatsList from './flat_list.jsx'

class Flat extends Component {
  render() {
    return (
      <div className="card"  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.url}')`}}> 
        <div className="card-category">{this.props.currency} {this.props.price}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a href="#" className="card-link"></a>
      </div>
    );
  }
}

export default Flat;