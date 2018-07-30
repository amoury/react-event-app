import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from 'react-redux';

import EventList from '../eventList/EventList';
import { deleteEvent } from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';


class EventDashboard extends Component {
 
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    if(this.props.loading) return <LoadingComponent inverted={true}/>
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
  events: state.events,
  loading: state.async.loading
});

export default connect(mapStateToProps, {deleteEvent})(EventDashboard);
