import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';

const SalaryResults = ({ avgSalary, countryAvgSalary, worldAvgSalary }) => {
  let country = 0;
  let countryName = '';
  let world = 0;

  if (countryAvgSalary.value && worldAvgSalary) {
    country = countryAvgSalary.value;
    countryName = countryAvgSalary.country.value;
    world = worldAvgSalary.value;
  }

  return (
    <>
      <style type="text/css">
        {`
  
  react:first-child{
    fill: #000000;
    opacity: 0;
  }

  #reactgooglegraph-1 {
    width: 80%;
    min-height: 400px;
  }
  `}
      </style>
      <Chart
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Average salary', 'Salary'],
          ['World', world],
          [countryName, country],
          ['Your salary', avgSalary]
        ]}
        options={{
          backgroundColor: '#F5DEB3',
          title: 'Average salaries',
          colors: ['#004D1B', '#ADD8E6'],
          hAxis: {
            title: '',
            minValue: 0
          },
          vAxis: {
            title: 'Salaries',
            minValue: 0
          }
        }}
        legendToggle
      />
    </>
  );
};

SalaryResults.propTypes = {
  countryAvgSalary: PropTypes.func.isRequired,
  worldAvgSalary: PropTypes.func.isRequired,
  avgSalary: PropTypes.func.isRequired
};

export default SalaryResults;
