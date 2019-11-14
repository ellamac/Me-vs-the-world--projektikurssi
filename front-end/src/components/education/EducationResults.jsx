import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import Info from '../Info';
import '../Styles.css';

const EducationResults = ({ countryEduYears, worldEduYears, eduYears }) => {
  let country = 0;
  let countryName = '';
  let world = 0;
  let info = '';

  if (countryEduYears.value && worldEduYears) {
    country = countryEduYears.value;
    countryName = countryEduYears.country.value;
    world = worldEduYears.value;
  }

  info = countryEduYears.info;
  const yearInfoWorld = `World, ${worldEduYears.date}`;
  const yearInfoCountry = countryEduYears.date;

  return (
    <>
      <Chart
        height='400px'
        chartType='ColumnChart'
        loader={<div>Loading Chart</div>}
        data={[
          ['Education years', 'Education'],
          [yearInfoWorld, world],
          [
            !countryName
              ? 'Country average'
              : `${countryName}, ${yearInfoCountry}`,
            country
          ],
          ['Your education years', eduYears]
        ]}
        options={{
          backgroundColor: { fill: 'transparent' },
          fontSize: '18',
          textStyle: { color: 'white' },
          title: 'Average salaries',
          colors: ['#004D1B', '#ADD8E6'],
          legend: { textStyle: { color: 'white', fontSize: 18 } },
          tooltip: { isHtml: true, trigger: 'visible', value: 'testi' },
          hAxis: {
            title: '',
            titleTextStyle: { color: 'white' },
            minValue: 0,
            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },
            baselineColor: 'white'
          },
          vAxis: {
            title: 'Years',
            titleTextStyle: { color: 'white', italic: false },
            minValue: 20,
            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },
            viewWindow: { min: 0 },
            viewWindowMode: 'pretty',
            baselineColor: 'white'
          }
        }}
        legendToggle
      />
      <Info dataInfo={info} />
    </>
  );
};

EducationResults.propTypes = {
  countryEduYears: PropTypes.oneOfType([PropTypes.object]).isRequired,
  worldEduYears: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eduYears: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default EducationResults;
