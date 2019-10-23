import React from 'react';
import Container from 'react-bootstrap/Container';
import Pages from './componets/Pages';
import Header from './componets/Header';
import Footer from './componets/Footer';
import TopNavBar from './componets/TopNavBar';

const App = () => {
  return (
    <>
      <TopNavBar />
      <Header />
      <Container>
        <Pages />
      </Container>
      <Footer />
    </>
  );
};

export default App;
