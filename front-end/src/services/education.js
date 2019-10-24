import axios from 'axios';

// Post request for education data with country code
const getEducationLength = async code => {
  const postData = { code };
  console.log('Country code to inject', code);
  const response = await axios.post(
    'http://localhost:3001/educationlength',
    postData
  );
  console.log(response);
  return response.data;
};

export default { getEducationLength };
