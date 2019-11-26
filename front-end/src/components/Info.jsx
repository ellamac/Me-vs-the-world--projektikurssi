import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ dataInfo }) => {
  return <p style={{ color: 'white', margin: '0' }}>{dataInfo}</p>;
};
Info.propTypes = {
  dataInfo: PropTypes.string.isRequired
};

export default Info;
