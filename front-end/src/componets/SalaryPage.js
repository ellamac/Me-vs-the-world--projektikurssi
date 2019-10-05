import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SalaryForm from './SalaryForm';
import Results from './Results';

const SalaryPage = () => {
  return (
    <>
      <h1 className='text-center mt-5 mb-5'>Me versus the WORLD!</h1>
      <h2>asdasd</h2>
      <Row>
        <Col>
          <SalaryForm />
        </Col>
        <Col>
          <Results />
        </Col>
      </Row>
    </>
  );
};

export default SalaryPage;
