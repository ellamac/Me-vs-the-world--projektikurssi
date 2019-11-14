import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import '../Styles.css';

const SalaryResults = ({ avgSalary, countryAvgSalary, worldAvgSalary }) => {
  let country = 0;
  let countryName = '';
  const world = worldAvgSalary.value;

  if (countryAvgSalary.value && worldAvgSalary) {
    country = countryAvgSalary.value;
    countryName = countryAvgSalary.country.value;
    // world = worldAvgSalary.value;
  }
<<<<<<< HEAD
=======
  const yearInfoWorld = `World, ${worldAvgSalary.date}`;
  const yearInfoCountry = countryAvgSalary.date;
>>>>>>> 16dbeefc904e7f619d3b935853e36e8a8ded6619

  return (
    <>
      <Chart
        height='400px'
        chartType='ColumnChart'
        loader={<div>Loading Chart</div>}
        data={[
          ['Average salary', 'Salary'],
          [yearInfoWorld, world],
          [
            !countryName
              ? 'Country average'
              : `${countryName}, ${yearInfoCountry}`,
            country
          ],
          ['Your salary', avgSalary]
        ]}
        options={{
          backgroundColor: { fill: 'transparent' },
          fontSize: '18',
          textStyle: { color: 'white' },
          title: 'Average salaries',
          colors: ['#004D1B', '#ADD8E6'],
          legend: { position: 'none' },
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
            viewWindow: { min: 0 },
            viewWindowMode: 'pretty',
            baselineColor: 'white'
          }
        }}
      />
    </>
  );
};

SalaryResults.propTypes = {
<<<<<<< HEAD
  countryAvgSalary: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
    .isRequired,
  worldAvgSalary: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
    .isRequired,
  avgSalary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
=======
  countryAvgSalary: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  worldAvgSalary: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  avgSalary: PropTypes.oneOfType([PropTypes.string]).isRequired
>>>>>>> 16dbeefc904e7f619d3b935853e36e8a8ded6619
};

export default SalaryResults;
