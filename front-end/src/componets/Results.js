import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Results = () => {
  const now = 60;
  const soon = 80;
  return (
    <>
      <h2 className='text-center mb-5'>Tulokset</h2>
      <ProgressBar className='mb-5' now={now} label={`${now}%`} />
      <ProgressBar now={soon} label={`${soon}%`} />
    </>
  );
};

export default Results;
