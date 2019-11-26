import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectCountry from './SelectCountry';
import './Styles.css';

const ResponsiveForm = ({
  handleSubmit,
  handleChange,
  controlId,
  inputLabel,
  max,
  min
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Row className='row align-items-end'>
        <Col xs={12} sm md={4} lg={4} className=''>
          <SelectCountry handleChange={handleChange} />
        </Col>

        <Col xs={12} sm md lg className=''>
          <Form.Group controlId={controlId}>
            <Row className='row align-items-end'>
              <Form.Label
                column
                xs={5}
                sm={12}
                md={12}
                lg={6}
                xl={5}
                className='text-sm-left text-lg-right'
              >
                {inputLabel}
              </Form.Label>

              <Col className='pl-2'>
                <Form.Control type='number' max={max} min={min} />
              </Col>
            </Row>
          </Form.Group>
        </Col>

        <Col xs={12} sm md={3} lg={3} className='pl-4'>
          <Form.Group as={Row} className='row align-items-end'>
            <Form.Label
              column
              xs={5}
              sm={12}
              md={12}
              lg={{ span: 6, order: 12 }}
              xl={{ span: 5, order: 12 }}
              className='text-sm-left text-lg-left'
            ></Form.Label>
            <Button
              xs={5}
              sm={12}
              md={12}
              lg={6}
              xl={5}
              className='column btn btn-primary '
              variant='primary'
              type='submit'
            >
              Submit
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default ResponsiveForm;
