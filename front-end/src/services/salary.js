import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

const getWorldSalary = async () => {
  const response = await trackPromise(axios.get('/api/salary'));
  return response.data;
};

// Post request for salary data with country code
const getCountrysSalary = async code => {
  const postData = { code };
  const response = await trackPromise(axios.post('/api/salary', postData));
  console.log(response);
  return response.data;
};

export default { getWorldSalary, getCountrysSalary };
