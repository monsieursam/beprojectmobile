import axios from 'axios';

export default axios.create({
  baseURL: 'https://beprojectback.herokuapp.com/api/',
});
