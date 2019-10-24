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
    backgroundColor: '#46445a',
    borderTop: '1px solid black',
    textAlign: 'center',
    padding: '0px',
    position: 'absolute',
    height: '150px',
    color: '#ffff',
    left: '0',
    //alignSelf: 'flexEnd',
    bottom: '0',
    width: '100%'
    //zIndex: '-1'
    //marginBottom: '-55px'
  };

  return (
    <div className='page-footer' style={footerSyle}>
      <Container>
        <Row>
          <Col className='p-2'>
            <img style={imgStyle} src={logo} alt='Me-VS-World' />
          </Col>
          <Col className='p-2'>
            <h4>Tietoja sovelluksesta ja mahdollisesti sen toteuttajista. </h4>
            <p>Tietoja sovelluksesta ja mahdollisesti sen toteuttajista. </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
