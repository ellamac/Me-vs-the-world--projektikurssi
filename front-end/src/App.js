import React from 'react';
import Home from './componets/Home';
import Footer from './componets/Footer';
import TopNavBar from './componets/TopNavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import educationService from './services/education';
import countrycodeService from './services/countrycodes';
import SalaryPage from './componets/SalaryPage';
import EducationPage from './componets/education/EducationPage';

const App = () => {
  //tähän testi servicestä
  let data = countrycodeService.getCountrycodes();
  console.log(data);

  return (
    <Router>
      <TopNavBar />
      <Route exact path='/' render={() => <Home />} />
      <Route path='/salary' render={() => <SalaryPage />} />
      <Route path='/education' render={() => <EducationPage />} />
      <Footer />
    </Router>
  );
};

export default App;
