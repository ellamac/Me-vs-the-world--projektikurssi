import React, { useState, useEffect } from 'react';
import EducationForm from './EducationForm';
import EducationResults from './EducationResults';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import educationService from '../../services/education';
import backg from '../../images/education.jpg';

const EducationPage = () => {
  const [eduYears, setEduYears] = useState(0);
  const [countryEduYears, setCountryEduYears] = useState({});
  const [worldEduYears, setWorldEduYears] = useState({});

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
    educationService.getWorldEducationYears().then(data => setWorldEduYears(data));
  }, []);

  return (
    <>
      <style>
        {`
          h1{
            color: white;
          }

        .bg {
          height: 100vh;
          background-position: bottom center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          background-color: #00000;
        }
        `}
      </style>
      <div className="bg" style={{ backgroundImage: `url(${backg})` }}>
        <Container>
          <h1 className="text-center p-5">How long did you go to school?</h1>
          <Row>
            <Col xs lg="3">
              <EducationForm
                eduYears={eduYears}
                setEduYears={setEduYears}
                setCountryEduYears={setCountryEduYears}
              />
            </Col>
            <Col>
              <EducationResults
                eduYears={eduYears}
                countryEduYears={countryEduYears}
                worldEduYears={worldEduYears}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EducationPage;
