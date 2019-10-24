import React from 'react';
import logo from '../images/logo.png';
import earth from '../images/earth.jpg';
import earthvideo from '../images/earth-video.mp4';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom/';
import Video from 'react-background-video-player';

const Home = () => {
  const imgStyle = {
    width: '100%',
    maxWidth: '1005px',
    height: 'auto'
  };

  const backGround = {
    //backgroundImage: `url(${earth})`,
    color: 'white'

    //height: '100vh',
    //maxWidth: '100%'
  };

  const videoStyle = {
    height: '100vh',
    maxWidth: '100vw',
    zIndex: '-100'
    //marginTop: '55px' // TODO, kova koodattu arvo
  };
  return (
    <div className='text-center' style={backGround}>
      <Video
        style={videoStyle}
        src={earthvideo}
        containerWidth={0}
        containerHeight={0}
      />

      <Col>
        <img style={imgStyle} src={logo} alt='Me-VS-World' />
        <h3 style={{ fontWeight: '700', color: 'white' }}>
          Click to compare your self to the worlds data on finance, education
          and other subjects!
        </h3>
        <div className='pl-5'>
          <Link to='/salary'>
            <Button className='m-4 btn-danger'>Salary</Button>
          </Link>
          <Link to='/education'>
            <Button className='m-4 btn-light'>Education</Button>
          </Link>
          <Button className='m-4 btn-warning'>Other</Button>
        </div>
      </Col>
    </div>
  );
};

export default Home;
