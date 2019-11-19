import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

const getWorldElectricity = async () => {
  const response = await trackPromise(axios.get('/api/electricity'));
  return response.data;
};

// Post request for salary data with country code
const getCountrysElectricity = async code => {
  const postData = { code };
  const response = await trackPromise(axios.post('/api/electricity', postData));
  return response.data;
};

export default { getWorldElectricity, getCountrysElectricity };
