import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SelectCountry from '../SelectCountry';
import salaryService from '../../services/salary';

const SalaryForm = ({ setUserSalary, setSalaryData }) => {
  const [countrycode, setCoutrycode] = useState('');

  // Handles changes in salary input
  // Parses int out of the user input
  const handleSalaryChange = e => {
    const parsedInput = Number.parseInt(e.target.value, 10);
    if (isNaN(parsedInput)) setUserSalary(0);
    else setUserSalary(parsedInput);
  };

  // Handles form submit
  const handleSubmit = e => {
    e.preventDefault();
    salaryService.getCountrysSalary(countrycode).then(data => {
      setSalaryData(data);
    });
  };

  // Handles countrycode for select-search
  const handleChange = e => setCoutrycode(e.value);

  const colorWhite = {
    backgroundColor: 'black',
    color: 'white'
  };

  const buttonStyle = {
    display: 'inline-block',
    color: 'white',
    background: 'rgba(255, 255, 255, 0)',
    border: '2px solid #fff',
    fontWeight: 'bold',
    borderRadius: '0px',
    textAlign: 'center',
    outline: 'none',
    textDecoration: 'none',
    margin: '4px'
  };

  return (
    <>
      <style>
        {`
      label {
        color: #fefefe;
      }
     `}
      </style>
      <Form onSubmit={handleSubmit}>
        <SelectCountry handleChange={handleChange} />
        <Form.Group controlId="Salaryinput">
          <Form.Label>Your salary</Form.Label>
          <Form.Control onChange={handleSalaryChange} type="text" placeholder="Your salary" />
        </Form.Group>
        <Button style={buttonStyle} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SalaryForm;
