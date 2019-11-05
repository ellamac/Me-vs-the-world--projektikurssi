import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import TopNavBar from './components/TopNavBar';
import SalaryPage from './components/salary/SalaryPage';
import EducationPage from './components/education/EducationPage';
import Chart from 'react-google-charts';

const App = () => (
  <Router>
    <TopNavBar />
    <div className="d-flex flex-column justify-content-between">
      <div id="pages">
        <Route exact path="/" render={() => <Home />} />
        <Route path="/salary" render={() => <SalaryPage />} />
        <Route path="/education" render={() => <EducationPage />} />
      </div>
      {/* <Footer id='footer' /> */}
    </div>
  </Router>
);

export default App;
