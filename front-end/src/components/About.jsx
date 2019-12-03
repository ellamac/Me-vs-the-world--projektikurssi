import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../images/logosvg.svg';

const About = () => {
  const imgStyle = {
    width: '50%',
    maxWidth: '1005px',
    height: 'auto',
    padding: '0px 0px 50px 0px'
  };

  const centered = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  return (
    <Container className='text-center'>
      <div style={centered}>
        <img
          style={imgStyle}
          src={logo}
          alt='Me-VS-World'
          padding='100px 0px 0px 0px'
        />
        <h1>ME VS THE WORLD </h1>
        <p style={{ color: 'white' }}>
          University of Jyväskylä, Open Data Student Project Fall 2019 (TIEA207)
        </p>
      </div>
    </Container>
  );
};

export default About;
