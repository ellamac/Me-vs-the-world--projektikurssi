import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from '../images/logo.png';

const Header = () => {
  const imgStyle = {
    maxHeight: '300px'
  };

  return (
    <>
      <Jumbotron className='text-center'>
        <img style={imgStyle} src={logo} alt='Me-VS-World' />
        <h4>
          Compare your self to the worlds data on finance, education and other
          subjects!
        </h4>
      </Jumbotron>
    </>
  );
};

export default Header;
