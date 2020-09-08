import React from 'react';
import PropTypes from 'prop-types';

const primaryFormatter = (value) => (
  <>
    {(value >= 0) ? `${value} ms` : 'JUMP START'}
  </>
);

const secondaryFormatter = (value) => (
  <>
    {(value !== 1000000.0) ? `BEST TIME: ${value} ms` : 'SET FASTEST LAUNCH TIME'}
  </>
);

const Status  = ({isActive, primary, secondary}) => (
  <div>
    <h1>{primaryFormatter(primary)}</h1>
    <h5>{secondaryFormatter(secondary)}</h5>
  </div>
);

Status.propTypes = {
    primary: PropTypes.number,
    secondary: PropTypes.number,
};

export default Status;