import React, { Component } from 'react';
import { connect } from 'react-redux';

class SurveyNew extends Component {
  render() {
    return (
      <div>Survey New</div>
    );
  }
}
export default connect()(SurveyNew);