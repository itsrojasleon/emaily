import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys = () => {
    return this.props.surveys.reverse().map((survey, index) => (
      <div className="card" key={index}>
        <div>
          <h3 className="card-title">{survey.title}</h3>
          <p className="card-body">
            {survey.body}
          </p>
          <p className="date">
            Sent on: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div>
          <span>Yes: {survey.yes}</span>
          <span> No: {survey.no}</span>
        </div>
      </div>
    ));
  }
  render() {
    console.log(this.props.surveys)
    return (
      <div className="survey-container">
        {this.renderSurveys()}
      </div>
    );
  }
}
function mapStateToProps({ surveys }) {
  return {
    surveys
  };
}
export default connect(mapStateToProps, {fetchSurveys})(SurveyList);