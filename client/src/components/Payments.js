import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout 
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        currency="USD"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="add-credits">Add credits</button>
      </StripeCheckout>
    );
  }
}
export default connect(null, actions)(Payments);