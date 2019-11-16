import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

// Mapped countrycodedata for select-search
const getCountrycodes = async () => {
  let data = await trackPromise(axios.get('/api/countrycodes'));
  data = data.data.map(s => ({ value: s.id, label: s.value }));
  return data;
};

export default { getCountrycodes };
