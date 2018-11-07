import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../actions';

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  render() {
    return (

    );
  }
}
function mapStateToProps({ surveys }) {
  return {
    surveys
  };
}
export default connect(mapStateToProps, {fetchSurveys})(SurveyList);