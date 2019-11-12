import axios from 'axios';

// Mapped countrycodedata for select-search
const getCountrycodes = async () => {
  let data = await axios.get('/countrycodes');
  data = data.data.map(s => ({ value: s.id, label: s.value }));
  return data;
};

export default { getCountrycodes };
