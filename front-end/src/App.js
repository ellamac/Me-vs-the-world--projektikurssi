import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';

const App = () => {
  return (
    <Container>
      <h1 className='text-center mt-5 mb-5'>Me versus the WORLD!</h1>
      <h2>asdasd</h2>
      <Row>
        <Col>
          <PalkkaLomake />
        </Col>
        <Col>
          <Tulokset />
        </Col>
      </Row>
    </Container>
  );
};

const Tulokset = () => {
  const now = 60;
  const soon = 80;
  return (
    <>
      <h2 className='text-center mb-5'>Tulokset</h2>
      <ProgressBar className='mb-5' now={now} label={`${now}%`} />
      <ProgressBar now={soon} label={`${soon}%`} />
    </>
  );
};

const PalkkaLomake = () => (
  <>
    <h2 className='text-center'>Lomake</h2>
    <Form>
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

export default App;
