import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../images/logo.png';

const Footer = () => {
  const imgStyle = {
    maxHeight: '100px'
  };

  const footerSyle = {
    backgroundColor: '#F8F8F8',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%'
  };

  return (
    <div className='page-footer' style={footerSyle}>
      <Container>
        <Row>
          <Col>
            <img style={imgStyle} src={logo} alt='Me-VS-World' />
          </Col>
          <Col>
            <h4>Tietoja sovelluksesta ja mahdollisesti sen toteuttajista. </h4>
            <p>Tietoja sovelluksesta ja mahdollisesti sen toteuttajista. </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
