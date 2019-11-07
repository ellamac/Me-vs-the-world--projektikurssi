import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import '../Styles.css';

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
      <Chart
        height={'400px'}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Average salary', 'Salary'],
          ['World', world],
          [!countryName ? 'Country average' : countryName, country],
          ['Your salary', avgSalary]
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
  countryAvgSalary: PropTypes.string.isRequired,
  worldAvgSalary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  avgSalary: PropTypes.number.isRequired
};

export default SalaryResults;
