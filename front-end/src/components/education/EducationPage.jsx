import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import EducationResults from './EducationResults';
import EducationForm from './EducationForm';
import educationService from '../../services/education';
import backg from '../../images/education.jpg';
import '../Styles.css';
import LoadingIndicator from '../LoadingIndicator';

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
    <div className='bg' style={{ backgroundImage: `url(${backg})` }}>
      <Container>
        <h1 className='text-center p-5'>How long did you go to school?</h1>
        <EducationForm
          eduYears={eduYears}
          setEduYears={setEduYears}
          setCountryEduYears={setCountryEduYears}
        />
        <div className='loading-container'>
          <LoadingIndicator />
          <EducationResults
            eduYears={eduYears}
            countryEduYears={countryEduYears}
            worldEduYears={worldEduYears}
          />
        </div>
      </Container>
    </div>
  );
};

export default EducationPage;
