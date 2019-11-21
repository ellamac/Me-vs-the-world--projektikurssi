import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../images/logosvg.svg';

const buttonStyle = {
  padding: '0',
  border: 'none',
  background: 'none',
  borderRadius: '0px',
  color: 'white'
};

const TopNavBar = () => {
  return (
    <>
      <Navbar variant='black'>
        <Navbar.Brand href='/'>
          <img
            src={logo}
            className='navbar-img'
            width='30'
            height='30'
            alt=''
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/salary'>
              <Nav.Link>Salary</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/education'>
              <Nav.Link>Education</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/electricity'>
              <Nav.Link>Electricity</Nav.Link>
            </LinkContainer>
            <Nav.Link>
              <button value='accepted' style={buttonStyle} id='ad2hs-prompt'>
                Add to Home Screen
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavBar;
