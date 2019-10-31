import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SalaryForm from './SalaryForm';
import SalaryResults from './SalaryResults';
import salaryService from '../../services/salary';
import crowd from '../../images/salary.png';

const SalaryPage = () => {
  const [worldSalaryData, setWorldSalaryData] = useState('');
  const [salaryData, setSalaryData] = useState('');
  const [userSalary, setUserSalary] = useState(0);

  const backImage = {
    /* Set rules to fill background */
    minHeight: '100%',
    minWidth: '1024px',

    /* Set up proportionate scaling */
    width: '100%',
    height: 'auto',

    /* Set up positioning */
    position: 'fixed',
    top: '0',
    left: '0',

    zIndex: '-100'
  };

  useEffect(() => {
    salaryService.getWorldSalary().then(data => {
      setWorldSalaryData(data);
    });
  }, []);

  return (
    <>
      <style>
        {`
        
        h1 {
          color: #FEFEFE;
        }

        `}
      </style>
      <Container>
        <img style={backImage} src={crowd} alt="worker" />
        <h1 className="text-center p-5">Compare your salary to your country and the world!</h1>
        <Row>
          <Col xs lg="3">
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
    </>
  );
};

export default SalaryPage;
