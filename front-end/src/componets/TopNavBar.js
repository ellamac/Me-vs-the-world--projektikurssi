import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Me vs the world</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/salary'>Salary</Nav.Link>
          <NavDropdown title='Compare' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Salary</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Education</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Enviorment</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Help</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavBar;
