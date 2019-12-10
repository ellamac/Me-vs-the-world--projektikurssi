import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import TopNavBar from './components/TopNavBar';
import SalaryPage from './components/salary/SalaryPage';
import EducationPage from './components/education/EducationPage';
import ElectricityPage from './components/electricity/ElectricityPage';

const App = () => {
  return (
    <Router>
      <TopNavBar />

      <div className='d-flex flex-column justify-content-between'>
        <div id='pages'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/salary' component={() => <SalaryPage />} />
            <Route exact path='/education' component={EducationPage} />
            <Route exact path='/electricity' component={ElectricityPage} />
          </Switch>
        </div>
        {/* <Footer id='footer' /> */}
      </div>
    </Router>
  );
};

export default App;
