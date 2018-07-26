import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './TestActions';
import { Button } from 'semantic-ui-react';

class TestComponent extends Component {
  render () {
    return (
        <div>
          <h1>Test Area</h1>
          <h2>{this.props.data}</h2>
          <Button onClick={this.props.incrementCounter} color='green' content='Inc'/>
          <Button onClick={this.props.decrementCounter} color='red' content='Dec'/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});
 

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(TestComponent);