import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import '../Styles.css';

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
      <Chart
        height={'400px'}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Average salary', 'Salary'],
          ['World', worldAvgSalary],
          [!countryName ? 'Country average' : countryName, countryAvgSalary],
          ['Your salary', props.avgSalary]
        ]}
        options={{
          backgroundColor: { fill: 'transparent' },
          fontSize: '18',
          textStyle: { color: 'white' },
          title: 'Average salaries',
          colors: ['#004D1B', '#ADD8E6'],
          legend: { textStyle: { color: 'white', fontSize: 18 } },
          tooltip: { isHtml: true, trigger: 'visible' },
          hAxis: {
            title: '',
            titleTextStyle: { color: 'white' },
            minValue: 0,
            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },
            baselineColor: 'white'
          },
          vAxis: {
            title: 'Salaries',
            titleTextStyle: { color: 'white', italic: false },
            minValue: 0,
            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },
            minValue: 0,
            viewWindow: { min: 0 },
            viewWindowMode: 'pretty',
            baselineColor: 'white'
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
