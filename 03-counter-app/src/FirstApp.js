import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ greeting }) => {
  return (
    <Fragment>
      <h1>CounterApp</h1>
      <p>{greeting}</p>
    </Fragment>
  );
};

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

export default FirstApp;
