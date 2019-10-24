import React from 'react';
import Home from './componets/Home';
import Footer from './componets/Footer';
import TopNavBar from './componets/TopNavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SalaryPage from './componets/SalaryPage';
import EducationPage from './componets/education/EducationPage';

const App = () => {
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
