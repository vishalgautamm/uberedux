import React, { Component } from 'react';
import './Location.css';
import { connect } from 'react-redux';
import AutoComplete from 'react-google-autocomplete';

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
            console.log('sl: ', startLatitude)
          }}
          type={['address']}
          componentRestrictions={{country: ["us", "ca", "mx", "fr", "es"]}}
        />
      </div>
    )
  }
}

export default connect()(Location);
