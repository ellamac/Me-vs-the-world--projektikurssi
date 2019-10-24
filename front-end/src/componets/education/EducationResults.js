import React from 'react';

const EducationResults = props => {
  let countryEduYears = 0;
  let countryName = '';
  if (props.countryEduYears.educationvalue) {
    countryEduYears = props.countryEduYears.educationvalue.value;
    countryName = props.countryEduYears.educationvalue.country.value;
  }
  return (
    <>
      <h2>Omat koulukärsimykset {props.eduYears}</h2>
      <h2>
        Maan, {countryName} vuodet {countryEduYears}
      </h2>
    </>
  );
};

export default EducationResults;
