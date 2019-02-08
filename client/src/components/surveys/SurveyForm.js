import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';

import { FIELDS } from './formFields';
import validateEmails from '../../utils/validateEmails';


class SurveyForm extends Component {
  renderFields = () => {
    return _.map(FIELDS, ({ name, label }) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <div className="buttons">
            <Link className="button-cancel" to="/surveys">Cancel</Link>
            <button type="submit" className="button-next">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');
  
  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
