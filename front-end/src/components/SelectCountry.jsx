import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import countrycodeService from '../services/countrycodes';

const SelectCountry = ({ handleChange }) => {
  const [countrycodes, setCoutrycodes] = useState([]);

  useEffect(() => {
    countrycodeService.getCountrycodes().then(data => {
      setCoutrycodes(data);
    });
  }, []);

  return (
    <>
      <Form.Group controlId='Countryinput'>
        <Form.Label style={{ color: '#fefefe' }}>Your country</Form.Label>

        <Select required onChange={handleChange} options={countrycodes} />
      </Form.Group>
    </>
  );
};

SelectCountry.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default SelectCountry;
