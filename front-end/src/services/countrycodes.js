import axios from 'axios';

// Mapped countrycodedata for select-search
const getCountrycodes = async () => {
  let data = await axios.get('http://localhost:3001/countrycodes');
  data = data.data.map(s => ({ value: s.id, label: s.value }));
  console.log(data);
  return data;
};

export default { getCountrycodes };
