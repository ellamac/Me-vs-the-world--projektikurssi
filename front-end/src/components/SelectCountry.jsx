import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import countrycodeService from '../services/countrycodes';
import './Styles.css';

const SelectCountry = ({ handleChange }) => {
  const [countrycodes, setCoutrycodes] = useState([]);

  useEffect(() => {
    countrycodeService.getCountrycodes().then(data => {
      setCoutrycodes(data);
    });
  }, []);

  return (
    <>
      <Form.Group controlId='Countryinput'>
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
            Your country
          </Form.Label>

          <Col>
            <Select required onChange={handleChange} options={countrycodes} />
          </Col>
        </Row>
      </Form.Group>
    </>
  );
};

SelectCountry.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default SelectCountry;
