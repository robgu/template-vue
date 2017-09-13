import axios from 'axios';

axios.interceptors.request.use((config) => {
  config.url = `http://om9yvfnba.bkt.clouddn.com${config.url}`;
  return config;
})

axios.interceptors.response.use((response) => {
  return response.data;
})

export default axios;