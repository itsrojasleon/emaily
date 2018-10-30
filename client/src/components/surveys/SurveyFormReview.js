import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { FIELDS } from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(FIELDS, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
       {reviewFields}
      </div>
      <button 
        className="yellow darken-3 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button onClick={() => submitSurvey(formValues, history)} className="green darken-3 btn-flat right white-text">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));