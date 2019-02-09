import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyList from './surveys/SurveyList';
import LoginFirst from './LoginFirst';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        {this.props.auth ? (
          <React.Fragment>
            <div className="add-container">
              <Link to="/surveys/new" className="add">
                <i className="material-icons">add</i>
              </Link>
            </div>
            <SurveyList />
          </React.Fragment>
        ) : (
          <LoginFirst />
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth
});
export default connect(mapStateToProps)(Dashboard);
