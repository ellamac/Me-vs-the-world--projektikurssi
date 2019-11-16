import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

const getWorldEducationYears = async () => {
  const response = await trackPromise(axios.get('/api/educationlength'));
  return response.data;
};

// Post request for education data with country code
const getEducationLength = async code => {
  const postData = { code };
  const response = await trackPromise(
    axios.post('/api/educationlength', postData)
  );
  return response.data;
};

export default { getEducationLength, getWorldEducationYears };
