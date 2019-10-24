import React from 'react';
import Chart from 'react-google-charts';

const EducationResults = props => {
  let countryEduYears;
  let countryName = '';
  let worldEduYears;

  if (props.countryEduYears.educationvalue && props.worldEduYears) {
    countryEduYears = props.countryEduYears.educationvalue.value;
    countryName = props.countryEduYears.educationvalue.country.value;
    worldEduYears = props.worldEduYears.worldEduAvg.value;
  }
  return (
    <>
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
          title: 'Education averages',
          chartArea: { width: '80%' },
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
    </>
  );
};

export default EducationResults;
