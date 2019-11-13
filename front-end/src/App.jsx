import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TopNavBar from './components/TopNavBar';
import SalaryPage from './components/salary/SalaryPage';
import EducationPage from './components/education/EducationPage';
import ElectricityPage from './components/electricity/ElectricityPage';

const App = () => (
  <Router>
    <TopNavBar />
    <div className='d-flex flex-column justify-content-between'>
      {/* Testi pwa lataukselle */}
      <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />

      <div id='pages'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/salary'>
            <SalaryPage />
          </Route>
          <Route path='/education'>
            <EducationPage />
          </Route>
          <Route path='/electricity'>
            <ElectricityPage />
          </Route>
        </Switch>
      </div>
      {/* <Footer id='footer' /> */}
    </div>
  </Router>
);

export default App;
