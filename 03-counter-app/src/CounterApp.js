import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  const handleAdd = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <hr />
      <h2>
        <i>{value}</i>
      </h2>

      <button onClick={ handleAdd }>
        Click <b>+1</b>
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;
