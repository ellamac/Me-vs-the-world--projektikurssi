import React from 'react';
import logo from '../images/logo_white.png';
import crowd from '../images/testikuva.png';
import earthvideo from '../images/earth-video.mp4';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom/';
import Video from 'react-background-video-player';

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

  const backGround = {
    //backgroundImage: `url(${earth})`,
    color: 'white'

    //height: '100vh',
    //maxWidth: '100%'
  };

  const videoStyle = {
    /* Set rules to fill background */
    minHeight: '100%',
    minWidth: '1024px',

    /* Set up proportionate scaling */
    width: '100%',
    height: 'auto',

    /* Set up positioning */
    position: 'fixed',
    top: '0',
    left: '0',

    zIndex: '-100'
  };

  const buttonStyle = {
    display: 'inline-block',
    color: 'white',
    background: 'rgba(255, 255, 255, 0)',
    border: '2px solid #fff',
    fontWeight: 'bold',
    borderRadius: '0px',
    textAlign: 'center',
    outline: 'none',
    textDecoration: 'none',
    margin: '4px'
  };
  return (
    <>
      <style type="text/css">
        {`
  
  Button:hover, button:focus{
    color: #004D1B;
  }
  `}
      </style>
      <div className="text-center" style={backGround}>
        <img style={videoStyle} src={crowd} alt="Crowd-of-people" />

        <Col>
          <div style={centered}>
            <img style={imgStyle} src={logo} alt="Me-VS-World" padding="100px 0px 0px 0px" />
            <h3 style={{ fontWeight: '700', color: 'white' }}>
              Click to compare your self to the worlds data on finance, education and other
              subjects!
            </h3>
            <div className="pl-5">
              <Link to="/salary">
                <Button className="m-4" style={buttonStyle}>
                  Salary
                </Button>
              </Link>
              <Link to="/education">
                <Button className="m-4" style={buttonStyle}>
                  Education
                </Button>
              </Link>
              <Button className="m-4" style={buttonStyle}>
                Other
              </Button>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Home;
