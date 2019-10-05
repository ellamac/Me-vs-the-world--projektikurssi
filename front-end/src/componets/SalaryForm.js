import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const SalaryForm = () => {
  // This is a react hook for example form
  const [example, setExample] = useState('');

  // Here example change is handeled
  const handeExampleChange = event => {
    // Loging eventchanges to console
    console.log(event.target.value);
    // Setting change value to hook aka react state
    setExample(event.target.value);
  };

  return (
    <>
      <h2 className='text-center'>Lomake</h2>
      <Form>
        <Form.Group controlId='Esimerkki'>
          <Form.Label>Esimerkki syöte</Form.Label>
          <Form.Control
            onChange={handeExampleChange}
            type='text'
            placeholder='Esimerkki'
          />
        </Form.Group>
        <Form.Group controlId='Salaryinput'>
          <Form.Label>Your salary</Form.Label>
          <Form.Control type='text' placeholder='Your salary' />
        </Form.Group>
        <Form.Group controlId='MaaSelect'>
          <Form.Label>Select your country</Form.Label>
          <Form.Control as='select'>
            <option>Finland</option>
            <option>Canada</option>
            <option>America</option>
            <option>Sudan</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
};

export default SalaryForm;
