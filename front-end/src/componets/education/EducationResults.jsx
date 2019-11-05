import React from 'react';
import Chart from 'react-google-charts';

const EducationResults = props => {
  let countryEduYears;
  let countryName = '';
  let worldEduYears;

  if (props.countryEduYears.country && props.worldEduYears) {
    countryEduYears = props.countryEduYears.value;
    countryName = props.countryEduYears.country.value;
    worldEduYears = props.worldEduYears.value;
  }

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
          ['Education years', 'Education'],
          ['World', worldEduYears],
          [!countryName ? 'Country average' : countryName, countryEduYears],
          ['Your education years', props.eduYears]
        ]}
        options={{
          backgroundColor: '#F5DEB3',
          title: 'Education averages',
          colors: ['#004D1B', '#ADD8E6'],
          hAxis: {
            title: '',
            minValue: 0
          },
          vAxis: {
            title: 'Years',
            minValue: 0
          }
        }}
        legendToggle
      />
      <p></p>
    </>
  );
};

export default EducationResults;
