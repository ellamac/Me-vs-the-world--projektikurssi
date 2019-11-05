import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';

const SalaryResults = props => {
  let countryAvgSalary = 0;
  let countryName = '';
  let worldAvgSalary = 0;

  const input = props;

  if (input.countryAvgSalary && input.worldAvgSalary) {
    countryAvgSalary = props.countryAvgSalary.value;
    countryName = props.countryAvgSalary.country.value;
    worldAvgSalary = props.worldAvgSalary.value;
  }

  return (
    <>
      <style type="text/css">
        {`
  
  react:first-child{
    fill: #000000;
    opacity: 5;
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
          ['World', worldAvgSalary],
          [!countryName ? 'Country average' : countryName, countryAvgSalary],
          ['Your salary', props.avgSalary]
        ]}
        options={{
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
  worldAvgSalary: PropTypes.func.isRequired
  // avgSalary: PropTypes.func.isRequired
};

export default SalaryResults;
