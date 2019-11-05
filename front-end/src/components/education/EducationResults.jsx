import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import '../Styles.css';

const EducationResults = props => {
  let countryEduYears;
  let countryName = '';
  let worldEduYears;

  // This was needed to shut up Eslint warnings'
  const input = props;

  if (input.countryEduYears.country && input.worldEduYears) {
    countryEduYears = props.countryEduYears.value;
    countryName = props.countryEduYears.country.value;
    worldEduYears = props.worldEduYears.value;
  }

  return (
    <>
      <Chart
        height={'400px'}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Education years', 'Education'],
          ['World', worldEduYears],
          [countryName, countryEduYears],
          ['Your education years', input.eduYears]
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
      {/* <p></p> in comments for now because empty elements cause a warning */}
    </>
  );
};

EducationResults.propTypes = {
  countryEduYears: PropTypes.func.isRequired,
  worldEduYears: PropTypes.func.isRequired
  // eduYears: PropTypes.func.isRequired
};

export default EducationResults;
