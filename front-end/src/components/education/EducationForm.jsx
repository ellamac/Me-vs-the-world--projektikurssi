import React, { useState } from 'react';

import educationService from '../../services/education';
import ResponsiveForm from '../ResponsiveForm';

const EducationForm = ({ setEduYears, setCountryEduYears }) => {
  const [countrycode, setCoutrycode] = useState('fin');

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

export default EducationForm;
