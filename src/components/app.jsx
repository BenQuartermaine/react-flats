// TODO: Make flats clickable and display their LNG/LAT on the map


import React, { Component } from 'react';
import FlatList from './flat_list.jsx'
import flats from '../../data/flats.js'
import Marker from './marker.jsx'
import GoogleMapReact from 'google-map-react';

const API_KEY = process.env.REACT_FLATS_API_KEY;

class App extends Component {
  static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };

  constructor(props) {
    super(props);
    this.flats = flats;
  };

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.flats} />
        </div> 
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.flats.center} defaultZoom={12}>
            <Marker />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;