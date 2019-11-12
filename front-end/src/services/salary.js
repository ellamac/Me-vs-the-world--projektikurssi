import axios from 'axios';

const getWorldSalary = async () => {
  const response = await axios.get('/salary');
  return response.data;
};

// Post request for salary data with country code
const getCountrysSalary = async code => {
  const postData = { code };
  const response = await axios.post('/salary', postData);
  return response.data;
};

export default { getWorldSalary, getCountrysSalary };
