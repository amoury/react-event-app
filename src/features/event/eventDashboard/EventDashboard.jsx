import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from 'react-redux';

import EventList from '../eventList/EventList';
import { deleteEvent } from '../eventActions';


class EventDashboard extends Component {
 
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    return <Grid>
        <Grid.Column width={10}>
          <EventList onEventDelete={this.handleDeleteEvent} events={this.props.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>
      </Grid>;
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, {deleteEvent})(EventDashboard);
