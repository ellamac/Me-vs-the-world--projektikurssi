import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom/';
import backg from '../images/home.jpg';
import logo from '../images/logo_white.png';
import './Styles.css';

const Home = () => {
  const imgStyle = {
    width: '100%',
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
    <>
      <div
        className='text-center bg'
        style={{ backgroundImage: `url(${backg})` }}
      >
        <Col>
          <div style={centered}>
            <img
              style={imgStyle}
              src={logo}
              alt='Me-VS-World'
              padding='100px 0px 0px 0px'
            />
            <h3 style={{ fontWeight: '700', color: 'white' }}>
              Click to compare your self to the worlds data on finance,
              education and other subjects!
            </h3>
            <div className=''>
              <Link to='/salary'>
                <Button className='home-btn'>Salary</Button>
              </Link>
              <Link to='/education'>
                <Button className='home-btn'>Education</Button>
              </Link>
              <Link to='/electricity'>
                <Button className='home-btn'>Electricity</Button>
              </Link>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Home;
