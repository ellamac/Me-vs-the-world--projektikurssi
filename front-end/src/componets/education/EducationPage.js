import React, { useState, useEffect } from 'react';
import EducationForm from './EducationForm';
import EducationRasults from './EducationResults';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import educationService from '../../services/education';

const EducationPage = () => {
  const [eduYears, setEduYears] = useState(0);
  const [countryEduYears, setCountryEduYears] = useState({});
  const [worldEduYears, setWorldEduYears] = useState({});

  useEffect(() => {
    educationService
      .getWorldEducationYears()
      .then(data => setWorldEduYears(data));
  }, []);

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
            worldEduYears={worldEduYears}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default EducationPage;
