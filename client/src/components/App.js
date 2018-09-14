import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header.js';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Header />
            <Route exact path="/" render={() => <div>Hello there</div>} />
            <Route path="/surveys" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
export default connect(null, actions)(App);