import axios from 'axios';

const getSalary = async () => {
  const response = await axios.get('http://localhost:3001/salary');
  return response.data;
};

export default { getSalary };
