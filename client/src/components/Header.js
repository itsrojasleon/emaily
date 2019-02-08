import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Payments from './Payments';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return [
          <ul className="menu-items" key={1}>
            <li className="menu-item"><Payments /></li>
            <li className="menu-item" style={{ margin: '0 10px' }}>
              Credits: {this.props.auth.credits}
            </li>
            <li className="menu-item"><a href="/api/logout">Logout</a></li>
          </ul>
        ];
    }
  }
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div>
            <Link 
              to={this.props.auth ? '/surveys' : '/'}
              className="brand-logo"
            >
              <h1>Emaily</h1>
            </Link>
          </div>
          <React.Fragment>
            {this.renderContent()}
          </React.Fragment>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth,
});
export default connect(mapStateToProps)(Header);