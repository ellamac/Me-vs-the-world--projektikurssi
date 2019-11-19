import React, { useState, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SalaryForm from './SalaryForm';
import SalaryResults from './SalaryResults';
import salaryService from '../../services/salary';
import backg from '../../images/salary.jpg';
import '../Styles.css';

const SalaryPage = () => {
  const [worldSalaryData, setWorldSalaryData] = useState('');
  const [salaryData, setSalaryData] = useState('');
  const [userSalary, setUserSalary] = useState(0);

  useEffect(() => {
    salaryService.getWorldSalary().then(data => {
      setWorldSalaryData(data);
    });
  }, []);

  return (
    <>
      <div className='bg' style={{ backgroundImage: `url(${backg})` }}>
        <Container>
          <div />
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
              <SalaryResults
                salaries={salaryData}
                avgSalary={userSalary}
                countryAvgSalary={salaryData}
                worldAvgSalary={worldSalaryData}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SalaryPage;
