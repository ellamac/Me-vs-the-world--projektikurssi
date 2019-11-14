import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import '../Styles.css';

const ElectricityResults = ({
  avgElectricity,
  countryAvgElectricity,
  worldAvgElectricity
}) => {
  let country = 0;
  let countryName = '';
  let world = 0;

  if (countryAvgElectricity.value && worldAvgElectricity) {
    country = countryAvgElectricity.value;
    countryName = countryAvgElectricity.country.value;
    world = worldAvgElectricity.value;
  }

  const yearInfoWorld = `World, ${worldAvgElectricity.date}`;
  const yearInfoCountry = countryAvgElectricity.date;

  return (
    <>
      <Chart
        height='400px'
        chartType='ColumnChart'
        loader={<div>Loading Chart</div>}
        data={[
          ['Average Electricity', 'Electricity'],
          [yearInfoWorld, world],
          [
            !countryName
              ? 'Country average'
              : `${countryName}, ${yearInfoCountry}`,
            country
          ],
          ['Your Electricity consumption', avgElectricity]
        ]}
        options={{
          backgroundColor: { fill: 'transparent' },
          fontSize: '18',
          textStyle: { color: 'white' },
          title: 'Average power consumption',
          colors: ['#004D1B', '#ADD8E6'],
          legend: { position: 'none' },
          tooltip: { isHtml: true, trigger: 'visible' },
          hAxis: {
            title: '',
            titleTextStyle: { color: 'white' },
            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },
            baselineColor: 'white'
          },
          vAxis: {
            minValue: 20000,

            title: 'Power consumption',
            titleTextStyle: { color: 'white', italic: false },

            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },

            viewWindowMode: 'pretty',
            baselineColor: 'white'
          }
        }}
      />
    </>
  );
};

ElectricityResults.propTypes = {
  countryAvgElectricity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  worldAvgElectricity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  avgElectricity: PropTypes.oneOfType([PropTypes.string]).isRequired
};

export default ElectricityResults;
