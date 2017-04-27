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
            const startLatitude = place.geometry.location.lat();
            const startLongtitude = place.geometry.location.lng();
            this.props.addLocationAction({ startLatitude, startLongtitude })
          }}
          type={['address']}
          componentRestrictions={{country: "us"}}
        />
        <AutoComplete
          style={styles}
          onPlaceSelected={place => {
            const endtLatitude = place.geometry.location.lat();
            const endtLongtitude = place.geometry.location.lng();
            this.props.addLocationAction({ endtLatitude, endtLongtitude })
          }}
          type={['address']}
          componentRestrictions={{country: ["us", "ca", "mx"]}}
        />

      </div>
    )
  }
}

//mapStateToProps

const mapDispatchToProps = dispatch => ({
  addLocationAction: (location => dispatch(addLocation(location)))
})

export default connect(null, mapDispatchToProps)(Location);
