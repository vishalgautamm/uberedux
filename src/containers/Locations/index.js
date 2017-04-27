import React, { Component } from 'react';
import './Location.css';
import { connect } from 'react-redux';
import AutoComplete from 'react-google-autocomplete';
import { addLocation } from '../../actions';

const styles = {
  height: '30px',
  width: '300px',
  borderRadius: '5px',
  border: '1px solid gray',
  margin: '10px auto',
}

class Location extends Component {
  render() {
    return (
      <div className="Location">
        <AutoComplete
          style={styles}
          onPlaceSelected={place => {
            console.log('place :', place)
            const startLatitude = place.geometry.location.lat();
            const startLongtitude = place.geometry.location.lng();
            console.log('sl: ', startLatitude)
            console.log('sl: ', startLongtitude)
          }}
          type={['address']}
          componentRestrictions={{country: ["us", "ca", "mx"]}}
        />
        <AutoComplete
          style={styles}
          onPlaceSelected={place => {
            const endtLatitude = place.geometry.location.lat();
            const endtLongtitude = place.geometry.location.lng();
          }}
          type={['address']}
          componentRestrictions={{country: ["us", "ca", "mx"]}}
        />

      </div>
    )
  }
}

//mapStateToProps

export default connect()(Location);
