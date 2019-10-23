import React from 'react';
import logo from '../images/logo.png';
import earth from '../images/earth.jpg';
import earthvideo from '../images/earth-video.mp4';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';
import Video from 'react-background-video-player';

const Home = () => {
  const imgStyle = {
    width: '100%',
    maxWidth: '1000px',
    height: 'auto'
  };

  const backGround = {
    backgroundImage: `url(${earth})`,
    color: 'white',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    maxWidth: '100vw'
    //backgroundAttachment: 'fixed'
  };

  const videoStyle = {
    height: '100vh',
    maxWidth: '100vw',
    marginTop: '55px' // TODO, kova koodattu arvo
  };
  return (
    <div style={backGround}>
      <Video
        style={videoStyle}
        src={earthvideo}
        containerWidth={100}
        containerHeight={100}
      />
      <Row>
        <Col>
          <img style={imgStyle} src={logo} alt='Me-VS-World' />
          <h3 style={{ fontWeight: '700', color: 'white' }} className='p-5 m-5'>
            Compare your self to the worlds data on finance, education and other
            subjects!
          </h3>
          <div className='pl-5'>
            <Link to='/salary'>
              <Button className='m-4'>Salary</Button>
            </Link>
            <Button className='m-4 '>Education</Button>
            <Button className='m-4'>Other</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
