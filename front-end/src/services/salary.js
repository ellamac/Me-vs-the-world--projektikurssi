import axios from 'axios';

const getWorldSalary = async () => {
  const response = await axios.get('http://localhost:3001/salary');
  return response.data;
};

// Post request for salary data with country code
const getCountrysSalary = async code => {
  const postData = { code };
  console.log('Country code to inject', code);
  const response = await axios.post('http://localhost:3001/salary', postData);
  console.log(response);
  return response.data;
};

export default { getWorldSalary, getCountrysSalary };
