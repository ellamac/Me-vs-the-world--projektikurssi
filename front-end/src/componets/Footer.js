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
    // Formatting the looks
    backgroundColor: '#46445a',
    color: '#ffff',
    textAlign: 'center',
    borderTop: '1px solid black',
    padding: '0px',
    height: '150px',
    width: '100%',
    // Formatting the location
    position: 'absolute',
    //left: '0',
    //right: '0',
    bottom: '0',

    //zIndex: '-1'
    alignSelf: 'flexEnd'
    //marginBottom: '-55px'
  };

  return (
    <div className="page-footer" style={footerSyle}>
      <Container>
        <Row>
          <Col className="p-2">
            <img style={imgStyle} src={logo} alt="Me-VS-World" />
          </Col>
          <Col className="p-2">
            <h4>Tietoja sovelluksesta ja mahdollisesti sen toteuttajista. </h4>
            <p>Tietoja sovelluksesta ja mahdollisesti sen toteuttajista. </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
