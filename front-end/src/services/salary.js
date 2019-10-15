import axios from 'axios';

const getSalary = async () => {
  const response = await axios.get('http://localhost:3001/salary');
  return response.data;
};

// Post request for salary data with country code
const getCountrysSalary = async code => {
  const postData = { code };
  const response = await axios.post('http://localhost:3001/salary', postData);
  console.log(response.data);
  return response.data;
};

export default { getSalary, getCountrysSalary };
