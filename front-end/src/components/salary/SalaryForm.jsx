import React, { useState } from 'react';
import PropTypes from 'prop-types';
import salaryService from '../../services/salary';
import ResponsiveForm from '../ResponsiveForm';
import salaryService from '../../services/salary';

const SalaryForm = ({ setUserSalary, setSalaryData }) => {
  const [countrycode, setCoutrycode] = useState('');

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
  const handleChange = e => setCoutrycode(e.value);

  return (
    <ResponsiveForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      controlId={'Salaryinput'}
      inputLabel={'Your salary'}
    />
  );
};

SalaryForm.propTypes = {
  setUserSalary: PropTypes.func.isRequired,
  setSalaryData: PropTypes.func.isRequired
};

export default SalaryForm;
