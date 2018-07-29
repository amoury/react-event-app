import React, { Component } from 'react';
import GoogleMapReact from "google-map-react";
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './TestActions';
import Script from 'react-load-script';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete"; 



const Marker = () => <Icon name='marker' size='big' color='red'/>

class TestComponent extends Component {
  state = {
    address: "",
    scriptLoaded: false
  };

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => this.setState({ address });

  render() {
    const inputProps = { value: this.state.address, onChange: this.onChange };
    return (
      <div>
        {/* <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnDKcxsMboxTXh75wEaNL_0VTpIIe-UFM&libraries=places"
          onLoad={this.handleScriptLoad}
        /> */}
        <h1>Test Area</h1>
        <h2>{this.props.data}</h2>
        <Button
          onClick={this.props.incrementCounter}
          color="green"
          content="Inc"
        />
        <Button
          onClick={this.props.decrementCounter}
          color="red"
          content="Dec"
        />
        <br />
        <br />
        <br />
        {this.state.scriptLoaded && (
          <form onSubmit={this.handleFormSubmit}>
            <PlacesAutocomplete inputProps={inputProps} />
            <button type="submit">Submit</button>
          </form>
        )}

        <div style={{ height: "300px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCnDKcxsMboxTXh75wEaNL_0VTpIIe-UFM"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker
              lat={59.955413}
              lng={30.337844}
              text={"Kreyser Avrora"}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});
 

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(TestComponent);