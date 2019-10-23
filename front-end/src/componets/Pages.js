import React from 'react';
import SalaryPage from './SalaryPage';

const Pages = () => {
  const pagesStyle = {
    minHeight: '5000px'
  };
  return (
    <div style={pagesStyle}>
      <SalaryPage />
    </div>
  );
};

export default Pages;
