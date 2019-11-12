import axios from 'axios';

const getWorldSalary = async () => {
  const response = await axios.get('/api/salary');
  return response.data;
};

// Post request for salary data with country code
const getCountrysSalary = async code => {
  const postData = { code };
  const response = await axios.post('/api/salary', postData);
  return response.data;
};

export default { getWorldSalary, getCountrysSalary };
