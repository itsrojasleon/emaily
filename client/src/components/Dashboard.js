import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="add-container">
          <Link to="/surveys/new" className="add">
            <i className="material-icons">add</i>
          </Link>
        </div>
        <SurveyList />
      </div>
    );
  }
}

export default Dashboard;