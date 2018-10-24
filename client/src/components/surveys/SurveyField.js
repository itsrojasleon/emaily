// SurveyField contains logic to render a single label and text input

import React from 'react';

export default ({ input, label, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <input {...input} />
    {touched && error}
  </div>
);