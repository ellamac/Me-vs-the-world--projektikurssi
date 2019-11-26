import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ElectricityForm from './ElectricityForm';
import ElectricityResults from './ElectricityResults';
import electrisityService from '../../services/electricity';
import backg from '../../images/electricity.jpg';
import '../Styles.css';

const ElectricityPage = () => {
  const [worldElectricityData, setWorldElectricityData] = useState('');
  const [electricityData, setElectricityData] = useState({});
  const [userElectricity, setUserElectricity] = useState(0);

  useEffect(() => {
    electrisityService.getWorldElectricity().then(data => {
      setWorldElectricityData(data);
    });
  }, []);
  return (
    <>
      <div className='bg' style={{ backgroundImage: `url(${backg})` }}>
        <Container>
          <div />
          <h1 className='text-center p-5'>
            Compare your power consumption to your country and the world!
          </h1>

          <ElectricityForm
            userElectricity={userElectricity}
            setUserElectricity={setUserElectricity}
            setElectricityData={setElectricityData}
          />

          <ElectricityResults
            electricity={electricityData}
            avgElectricity={userElectricity}
            countryAvgElectricity={electricityData}
            worldAvgElectricity={worldElectricityData}
          />
        </Container>
      </div>
    </>
  );
};

export default ElectricityPage;
