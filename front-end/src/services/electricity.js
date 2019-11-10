import axios from 'axios';

const getWorldElectricity = async () => {
  const response = await axios.get('http://localhost:3001/electricity');
  return response.data;
};

// Post request for salary data with country code
const getCountrysElectricity = async code => {
  const postData = { code };
  const response = await axios.post('http://localhost:3001/electricity', postData);
  return response.data;
};

export default { getWorldElectricity, getCountrysElectricity };
