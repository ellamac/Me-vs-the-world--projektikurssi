import React from 'react';
import Chart from 'react-google-charts';

import Info from '../Info';
import '../Styles.css';

const ElectricityResults = ({
  avgElectricity,
  countryAvgElectricity,
  worldAvgElectricity
}) => {
  let country = 0;
  let countryName = '';
  let world = 0;
  let info = '';

  if (countryAvgElectricity.value) {
    country = countryAvgElectricity.value;
    countryName = countryAvgElectricity.country.value;
  }

  if (worldAvgElectricity) world = worldAvgElectricity.value;

  info = worldAvgElectricity.info;
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
              ? 'No Country Data'
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
          titleTextStyle: {
            color: '#FFF',
            bold: false
          },
          colors: ['#1B7742', '#ADD8E6'],
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
            minValue: 10000,

            title: 'Power consumption',
            titleTextStyle: { color: 'white', italic: false },

            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },

            viewWindowMode: 'pretty',
            baselineColor: 'white'
          }
        }}
      />
      <Info dataInfo={info} />
    </>
  );
};

export default ElectricityResults;
