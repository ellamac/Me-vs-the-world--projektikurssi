import React from 'react';

const EducationResults = props => {
  let countryEduYears = 0;
  let countryName = '';
  let worldEduYears = 0;

  if (props.countryEduYears.educationvalue && props.worldEduYears) {
    countryEduYears = props.countryEduYears.educationvalue.value;
    countryName = props.countryEduYears.educationvalue.country.value;
    worldEduYears = props.worldEduYears.worldEduAvg.value;
  }
  return (
    <>
      <h2>Omat koulukärsimykset {props.eduYears}</h2>
      <h2>
        Maan, {countryName} vuodet {countryEduYears}
      </h2>
      <h2>Maailma vuodet: {worldEduYears}</h2>
    </>
  );
};

export default EducationResults;
