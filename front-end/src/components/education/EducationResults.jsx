import React from 'react';
import Chart from 'react-google-charts';

const EducationResults = props => {
  let countryEduYears;
  let countryName = '';
  let worldEduYears;
  console.log(EducationResults.educationvalue);

  if (props.countryEduYears.educationvalue && props.worldEduYears) {
    countryEduYears = props.countryEduYears.educationvalue.value;
    countryName = props.countryEduYears.educationvalue.country.value;
    worldEduYears = props.worldEduYears.worldEduAvg.value;
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
          [countryName, countryEduYears],
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
