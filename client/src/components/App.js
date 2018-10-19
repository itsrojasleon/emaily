import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// App Components
import Header from './Header.js';
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" render={() => <div>Hello new Survey</div>} />
          </Fragment>
        </BrowserRouter>
      </Fragment>
    );
  }
}
export default connect(null, actions)(App);