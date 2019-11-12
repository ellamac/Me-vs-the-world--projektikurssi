import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logosvg.svg';

const TopNavBar = () => {
  return (
    <>
      <style type="text/css">
        {`
          .navbar-black {
            background-color: black;
            color: white;
          }

          .navbar-expand .navbar-nav .nav-link{
            color: white;
          }
          .navbar-expand .navbar-nav .nav-link:hover{
            background-color: white;
            color: black;
            
          }
          .navbar-img:hover svg path{
            fill: #004d1b;
          }
    `}
      </style>
      <Navbar variant="black">
        <Navbar.Brand href="/">
          <img src={logo} className="navbar-img" width="30" height="30" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/salary">Salary</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/electricity">Electricity</Nav.Link>
            <NavDropdown title="Compare" id="basic-nav-dropdown">
              <NavDropdown.Item href="/salary">Salary</NavDropdown.Item>
              <NavDropdown.Item href="/education">Education</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Enviorment</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavBar;
