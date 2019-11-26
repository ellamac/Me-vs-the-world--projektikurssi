import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../images/logosvg.svg';

const About = () => {
  return (
    <Container>
      <img src={logo} className='about-logo' width='50%' height='auto' alt='' />
      <h1>ME VS THE WORLD </h1>
      <p style={{ color: 'white' }}>Open Data Student Project 2019, TIEA207</p>
    </Container>
  );
};

export default About;
