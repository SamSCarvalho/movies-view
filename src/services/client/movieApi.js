import axios from 'axios';
import {BASE_URL, TOKEN} from '../../constants/api';

const APIRequest = axios.create({
  crossDomain: true,
  baseURL: BASE_URL,
  params: {
    language: 'pt-Br'
  },
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
  }
});

export default APIRequest;