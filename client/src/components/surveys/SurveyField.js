// SurveyField contains logic to render a single label and text input

import React from 'react';

export default ({ input, label, meta: { error, touched } }) => (
  <div className="survey-field-container">
    <label className="label">{label}</label>
    <input className="input" {...input} style={{ marginBottom: '5px' }} />
    <div className="error-input" style={{ marginBottom: '20px' }}>
      {touched && error}
    </div>
  </div>
);