import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div style={{ textAlign: 'center' }}>
    <h2 className="emaily">Emaily!</h2>
    <p className="collect">Collect feedback from your users</p>
    <Link className="watch-my-surveys" to="/surveys">
      Watch my Surveys
    </Link>
  </div>
);
export default Landing;
