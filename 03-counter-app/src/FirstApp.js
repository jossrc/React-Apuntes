import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ greeting, subTitle }) => {
  return (
    <Fragment>
      <h1>CounterApp</h1>
      <hr/>
      <h4> <i>{subTitle}</i> </h4>
      <p>{greeting}!!</p>
    </Fragment>
  );
};

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subTitle : 'Cuenta con nosotros'
}

export default FirstApp;
