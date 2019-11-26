import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Logo from '../images/loading';

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <Logo className='loading-content' />;
};

export default LoadingIndicator;
