import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../images/logo.png';

const imgStyle = {
  maxHeight: '100px'
};

const footerStyle = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  maxHeight: '150px',
  height: 'auto',
  //alignSelf: 'flexEnd',

  color: '#ffff',
  backgroundColor: '#46445a',
  textAlign: 'center',
  borderTop: '1px solid black',
  padding: '0px'
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <Container>
        <Row>
          <Col>
            <img style={imgStyle} src={logo} alt="Me-VS-World" />
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
