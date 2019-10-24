import axios from 'axios';

const getWorldEducationYears = async () => {
  const response = await axios.get('http://localhost:3001/educationlength');
  console.log(response.data);
  return response.data;
};

// Post request for education data with country code
const getEducationLength = async code => {
  const postData = { code };
  console.log('Country code to inject', code);
  const response = await axios.post(
    'http://localhost:3001/educationlength',
    postData
  );
  return response.data;
};

export default { getEducationLength, getWorldEducationYears };
