import React, { useState } from 'react';

import salaryService from '../../services/salary';
import ResponsiveForm from '../ResponsiveForm';

const SalaryForm = ({ setUserSalary, setSalaryData }) => {
  const [countrycode, setCoutrycode] = useState('fin');

  // Handles form submit
  const handleSubmit = e => {
    e.preventDefault();
    const parsedInput = Number.parseInt(e.target[1].value, 10);
    setUserSalary(parsedInput);
    salaryService.getCountrysSalary(countrycode).then(data => {
      setSalaryData(data);
    });
  };

  // Handles countrycode for select-search
  const handleChange = e => {
    setCoutrycode(e.value);
  };

  return (
    <ResponsiveForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      controlId='Salaryinput'
      inputLabel='Your salary'
    />
  );
};

export default SalaryForm;
