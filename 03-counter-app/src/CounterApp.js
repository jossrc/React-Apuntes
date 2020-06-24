import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    setCounter(counter + 1)
  };

  return (
    <>
      <h1>CounterApp</h1>
      <hr />
      <h2>
        <i>{counter}</i>
      </h2>

      <button onClick={handleAdd}>
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
