import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SalaryForm from './SalaryForm';
import Results from './Results';
import salaryService from '../services/salary';

const SalaryPage = () => {
  const [salaryData, setSalaryData] = useState([]);
  // This will fetch data from our backend
  useEffect(() => {
    salaryService.getSalary().then(salaryData => {
      setSalaryData(salaryData);
    });
  }, []);
  console.log(
    'Data haetaan back endistä tänne ja tähän muuttujaan "salaryData"!'
  );
  console.log(salaryData);

  return (
    <>
      <h1 className='text-center mt-5 mb-5'>Me versus the WORLD!</h1>
      <h2>asdasd</h2>
      <Row>
        <Col>
          <SalaryForm salary={salaryData} />
        </Col>
        <Col>
          <Results />
        </Col>
      </Row>
    </>
  );
};

export default SalaryPage;
