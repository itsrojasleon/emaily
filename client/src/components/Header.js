import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <a className="left brand-logo">Emaily</a>
            <ul className="right">
              <li>
                <a>Login with Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;