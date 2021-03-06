import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';
import MeetupDetails from './MeetupDetails';
import AddMeetup from './AddMeetup';
import EditMeetup from './EditMeetup';
import MasVida from './MasVida';
import Diagnostico from './Diagnostico';
import Cita from './Cita';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MasVida} />
      <Route exact path='/meetups' component={Meetups} />
      <Route exact path='/about' component={About} />
      <Route exact path='/meetups/add' component={AddMeetup} />
      <Route exact path='/meetups/edit/:id' component={EditMeetup} />
      <Route exact path='/meetups/:id' component={MeetupDetails} />
      <Route exact path='/cita' component={Cita} />
      <Route exact path='/diagnostico' component={Diagnostico} />
    </Switch>
  </main>
)

export default Main;