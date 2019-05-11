import React from 'react';
import ReactDOM from 'react-dom';
import {  Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import EventsContainer from './services/EventsContainer';
import Home from './home/Home';
import ContactUs from './contact-us/ContactUs';
import Notfound from './not-found/NotFound';
import Navbar from './ui-components/nav-bar/Navbar';

const routing = (
    <Router>
      <div>
          <Navbar></Navbar>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={EventsContainer} />
        <Route exact path="/contact" component={ContactUs} />
        <Route component={Notfound} />
        </Switch>
      </div>
      </Router>

  )
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
