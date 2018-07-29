import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import EventDetailedPage from '../../features/event/eventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/testarea/TestComponent';
import ModalManager from '../../features/modals/ModalManager';

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Route path="/(.+)" render={() => (
          <Fragment>
            <NavBar/>
            <Container className="main">
              <Switch>
                <Route path='/manage/:id' component={EventForm} />
                <Route path='/event/:id' component={EventDetailedPage} />
                <Route path='/events' component={EventDashboard} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
                <Route path='/test' component={TestComponent} />
              </Switch>
            </Container>
          </Fragment>
        )}/>
      </div>
    );
  }
}

export default App;

