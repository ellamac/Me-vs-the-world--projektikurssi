import React, { useState } from 'react';
import PropTypes from 'prop-types';
import educationService from '../../services/education';
import ResponsiveForm from '../ResponsiveForm';

const EducationForm = ({ setEduYears, setCountryEduYears }) => {
  const [countrycode, setCoutrycode] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    educationService.getEducationLength(countrycode).then(data => {
      setCountryEduYears(data);
    });
    setEduYears(e.target[1].value);
  };
  const handleChange = e => {
    setCoutrycode(e.value);
  };

  return (
    <ResponsiveForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      controlId='Salaryinput'
      inputLabel='Your education years'
      max={100}
      min={0}
    />
  );
};

EducationForm.propTypes = {
  setEduYears: PropTypes.func.isRequired,
  setCountryEduYears: PropTypes.func.isRequired
};

export default EducationForm;
