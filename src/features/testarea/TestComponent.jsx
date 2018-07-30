import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "./TestActions";
import { openModal } from "../modals/modalActions";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

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
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnDKcxsMboxTXh75wEaNL_0VTpIIe-UFM&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <h1>Test Area</h1>
        <h2>{this.props.data}</h2>
        <Button
          loading={this.props.loading}
          onClick={this.props.incrementAsync}
          color="green"
          content="Inc"
        />
        <Button
          loading={this.props.loading}
          onClick={this.props.decrementAsync}
          color="red"
          content="Dec"
        />
        <Button
          onClick={() =>
            this.props.openModal("TestModal", {
              data: 43
            })
          }
          color="teal"
          content="Open"
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data,
  loading: state.test.loading
});

export default connect(
  mapStateToProps,
  { incrementAsync, decrementAsync, openModal }
)(TestComponent);
