import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import '../Styles.css';

const EducationResults = ({ countryEduYears, worldEduYears, eduYears }) => {
  let country = 0;
  let countryName = '';
  let world = 0;

  if (countryEduYears.value && worldEduYears) {
    country = countryEduYears.value;
    countryName = countryEduYears.country.value;
    world = worldEduYears.value;
  }

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
          legend: { position: 'none' },
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
      />
      {/* <p></p> in comments for now because empty elements cause a warning */}
    </>
  );
};

EducationResults.propTypes = {
  countryEduYears: PropTypes.oneOfType([PropTypes.object]).isRequired,
  worldEduYears: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eduYears: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default EducationResults;
