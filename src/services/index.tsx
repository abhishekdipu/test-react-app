import axios from 'axios';
import {BASE_URL} from '../constants/urls';

const API = axios.create({
  baseURL: BASE_URL.JPS_SERVICE,
});

export default API;
