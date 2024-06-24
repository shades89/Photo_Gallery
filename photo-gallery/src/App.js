import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
