import React, { useState } from 'react';
import EducationForm from './EducationForm';
import EducationRasults from './EducationResults';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const EducationPage = () => {
  const [eduYears, setEduYears] = useState(0);
  const [countryEduYears, setCountryEduYears] = useState({});

  return (
    <Container>
      <h1 className='text-center p-5'>How long did you go to school?</h1>
      <Row>
        <Col xs lg='3'>
          <EducationForm
            eduYears={eduYears}
            setEduYears={setEduYears}
            setCountryEduYears={setCountryEduYears}
          />
        </Col>
        <Col>
          <EducationRasults
            eduYears={eduYears}
            countryEduYears={countryEduYears}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default EducationPage;
