import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
        return (
          <li><a>Logout</a></li>
        );
    }
  }
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link 
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
            >
              Emaily
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth,
});
export default connect(mapStateToProps)(Header);