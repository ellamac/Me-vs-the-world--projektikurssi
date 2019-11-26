import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import SalaryForm from './SalaryForm';
import SalaryResults from './SalaryResults';
import salaryService from '../../services/salary';
import backg from '../../images/salary.jpg';
import '../Styles.css';
import LoadingIndicator from '../LoadingIndicator';

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
    <div className='bg' style={{ backgroundImage: `url(${backg})` }}>
      <Container>
        <h1 className='text-center py-5'>
          Compare your salary to your country and the world!
        </h1>
        <SalaryForm
          userSalary={userSalary}
          setUserSalary={setUserSalary}
          setSalaryData={setSalaryData}
        />
        <div className='loading-container'>
          <LoadingIndicator />
          <SalaryResults
            salaries={salaryData}
            avgSalary={userSalary}
            countryAvgSalary={salaryData}
            worldAvgSalary={worldSalaryData}
          />
        </div>
      </Container>
    </div>
  );
};

export default SalaryPage;
