import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SalaryForm from './SalaryForm';
import Results from './Results';
import salaryService from '../services/salary';
import Container from 'react-bootstrap/Container';

const SalaryPage = () => {
  const [salaryData, setSalaryData] = useState('');
  const [userSalary, setUserSalary] = useState(0);

  useEffect(() => {
    salaryService.getCountrysSalary('fin').then(data => {
      setSalaryData(data);
    });
  }, []);

  return (
    <Container>
      <h1 className='text-center p-5'>
        Compare your salary to your country and the world!
      </h1>
      <Row>
        <Col xs lg='3'>
          <SalaryForm
            userSalary={userSalary}
            setUserSalary={setUserSalary}
            setSalaryData={setSalaryData}
          />
        </Col>
        <Col>
          <Results
            salaries={salaryData}
            setSalaryData={setSalaryData}
            userSalary={userSalary}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SalaryPage;
