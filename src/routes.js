import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ContactPage from './components/contacts/ContactPage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="contacts" component={ContactPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);