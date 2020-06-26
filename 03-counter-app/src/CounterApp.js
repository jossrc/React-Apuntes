import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => setCounter(counter + 1);
  const handleSubstract = (e) => setCounter(counter - 1);
  const handleReset = (e) => setCounter(value);

  return (
    <>
      <h1>CounterApp!!</h1>
      <hr />
      <h2>
        <i>{counter}</i>
      </h2>

      <button onClick={handleAdd}>Click +1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>Click -1</button>
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
