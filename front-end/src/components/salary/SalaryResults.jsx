import React from 'react';
import Chart from 'react-google-charts';

const SalaryResults = props => {
  let countryAvgSalary;
  let countryName = '';
  let worldAvgSalary;

  if (props.countryAvgSalary.salaryValue && props.worldAvgSalary) {
    countryAvgSalary = props.countryAvgSalary.salaryValue.value;
    countryName = props.countryAvgSalary.salaryValue.country.value;
    worldAvgSalary = props.worldAvgSalary.worldSalaryAvg.value;
  }
  console.log(countryAvgSalary);
  console.log(countryName);
  console.log(worldAvgSalary);

  return (
    <>
      <style type="text/css">
        {`
  
  rect:first-child{
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
          ['World', worldAvgSalary],
          [countryName, countryAvgSalary],
          ['Your salary', props.avgSalary]
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

export default SalaryResults;
