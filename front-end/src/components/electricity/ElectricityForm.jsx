import React, { useState } from 'react';
import PropTypes from 'prop-types';
import electricityService from '../../services/electricity';
import ResponsiveForm from '../ResponsiveForm';

const ElectricityForm = ({ setUserElectricity, setElectricityData }) => {
  const [countrycode, setCoutrycode] = useState('');

  // Handles form submit
  const handleSubmit = e => {
    e.preventDefault();
    const parsedInput = Number.parseInt(e.target[1].value, 10);
    setUserElectricity(parsedInput);
    electricityService.getCountrysElectricity(countrycode).then(data => {
      setElectricityData(data);
    });
  };

  // Handles countrycode for select-search
  const handleChange = e => setCoutrycode(e.value);

  return (
    <ResponsiveForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      controlId='ElectricityInput'
      inputLabel='Your electricity consumption in kwh'
    />
  );
};

ElectricityForm.propTypes = {
  setUserElectricity: PropTypes.func.isRequired,
  setElectricityData: PropTypes.func.isRequired
};

export default ElectricityForm;
