import React, { Fragment } from 'react';

const FirstApp = () => {
  const greeting = 'Bienvenido a CounterApp';
  const greet = {
    message: 'Bienvenido',
    farewell: 'Adios',
    morning: 'Buenos días',
    afternoon: 'Buenas tardes',
    evening: 'Buenas noches',
  };

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <p>{greeting}</p>
      <pre>  {JSON.stringify(greet, null, 3)} </pre>
    </Fragment>
  );
};

export default FirstApp;
