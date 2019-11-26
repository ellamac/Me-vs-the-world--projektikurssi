import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Logo from '../images/loading';

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div id='overlay'>
        <Logo id='overlay-text' />
      </div>
    )
  );
};

export default LoadingIndicator;
