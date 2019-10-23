import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SalaryForm from './SalaryForm';
import Results from './Results';
import salaryService from '../services/salary';

const SalaryPage = () => {
  const [salaryData, setSalaryData] = useState('');
  const [userSalary, setUserSalary] = useState(0);

  useEffect(() => {
    salaryService.getCountrysSalary('fin').then(data => {
      setSalaryData(data);
    });
  }, []);

  return (
    <>
      <Row>
        <Col>
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
    </>
  );
};

export default SalaryPage;
