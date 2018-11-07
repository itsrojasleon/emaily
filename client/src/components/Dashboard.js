import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSurveys } from '../actions';
import SurveyList from '../components/surveys/SurveyList';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  render() {
    return (
      <div>
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
        <SurveyList />
      </div>
    );
  }
}
function mapStateToProps({ surveys }) {
  return {
    surveys
  };
}
export default connect(mapStateToProps, {fetchSurveys})(Dashboard);