import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ dataInfo }) => {
  return <p style={{ color: 'white' }}>{dataInfo}</p>;
};
Info.propTypes = {
  dataInfo: PropTypes.string.isRequired
};

export default Info;
