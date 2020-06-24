import React, { Fragment } from 'react';

const FirstApp = ({ greeting = 'Bienvenido' }) => {
  return (
    <Fragment>
      <h1>CounterApp</h1>
      {/* <p>{props.greeting}</p> */}
      <p>{greeting}</p>
    </Fragment>
  );
};

export default FirstApp;
