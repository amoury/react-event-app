import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render () {
    const {events, onEventOpen, onEventDelete} = this.props;

    return <div>
        {events && events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            onEventDelete={onEventDelete}
          />
        ))}
      </div>;
  }
}

export default EventList;