import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import axios from 'axios';
import salaryService from '../services/salary';
import countrycodeService from '../services/countrycodes';

const SalaryForm = ({ userSalary, setUserSalary, setSalaryData }) => {
  const [countrycodes, setCoutrycodes] = useState([]);
  const [countrycode, setCoutrycode] = useState('');

  // Handles changes in salary input
  // Parses int out of the user input
  const handleSalaryChange = e => {
    const parsedInput = Number.parseInt(e.target.value, 10);
    if (isNaN(parsedInput)) setUserSalary(0);
    else setUserSalary(parsedInput);
    // console.log('parsed salary input: ' + parsedInput);
  };

  useEffect(() => {
    setCoutrycodes(countrycodeService.getCountrycodes());
  }, []);

  // Handles form submit
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Salary input: ', userSalary);
    salaryService.getCountrysSalary(countrycode).then(data => {
      console.log(data);
      setSalaryData(data);
    });
  };

  //Handles countrycode for select-search
  const handleChange = selectedOption => {
    console.log(selectedOption.value);
    setCoutrycode(selectedOption.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='Countryinput'>
          <Form.Label>Your country</Form.Label>
          <Select onChange={handleChange} options={countrycodes} />
        </Form.Group>
        <Form.Group controlId='Salaryinput'>
          <Form.Label>Your salary</Form.Label>
          <Form.Control
            onChange={handleSalaryChange}
            type='text'
            placeholder='Your salary'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SalaryForm;
