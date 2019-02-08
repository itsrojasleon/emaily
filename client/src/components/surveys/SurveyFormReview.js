import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { FIELDS } from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(FIELDS, ({ name, label }) => {
    return (
      <div className="description" key={name}>
        <label className="label-review">{label}: </label>
        <div className="data-review">
          "{formValues[name]}"
        </div>
      </div>
    );
  });
  return (
    <div className="survey-form-review-container">
      <h5 className="please-confirm">Please confirm your entries</h5>
      <div>
       {reviewFields}
      </div>
      <div className="buttons-review">
        <button 
          className="button-cancel"
          onClick={onCancel}
        >
          Back
        </button>
        <button className="button-next" onClick={() => submitSurvey(formValues, history)}>
          Send Survey
        </button>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));