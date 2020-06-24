import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <hr/>
      <h2> <i>{value}</i> </h2>
    </>
  );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;
