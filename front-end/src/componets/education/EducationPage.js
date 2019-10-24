import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import axios from 'axios';

import Container from 'react-bootstrap/Container';

const EducationPage = () => {
  const [eduYears, setEduYears] = useState(0);

  return (
    <Container>
      <h1 className='text-center p-5'>How long did you go to school?</h1>
      <Row>
        <Col xs lg='3'>
          <EducationForm eduYears={eduYears} setEduYears={setEduYears} />
        </Col>
        <Col>
          <Results eduYears={eduYears} />
        </Col>
      </Row>
    </Container>
  );
};

const Results = props => {
  return <h2>{props.eduYears}</h2>;
};

const EducationForm = ({ eduYears, setEduYears }) => {
  const [countrycodes, setCoutrycodes] = useState([]);
  const [countrycode, setCoutrycode] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('JEJEJEJE');
    console.log(countrycode, '  ', eduYears);
  };

  // Mapped countrycodedata for select-search
  const getCountrycodes = () => {
    let data;
    axios.get('http://localhost:3001/countrycodes').then(result => {
      data = result.data.map(s => ({ value: s.id, label: s.value }));
      setCoutrycodes(data);
    });
    return data;
  };

  useEffect(() => {
    setCoutrycodes(getCountrycodes());
  }, []);

  const handleChange = e => setCoutrycode(e.value);
  const handleEduChange = e => setEduYears(e.target.value);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='Countryinput'>
          <Form.Label>Your country</Form.Label>
          <Select onChange={handleChange} options={countrycodes} />
        </Form.Group>
        <Form.Group controlId='Salaryinput'>
          <Form.Label>Your education years</Form.Label>
          <Form.Control onChange={handleEduChange} type='text' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EducationPage;
