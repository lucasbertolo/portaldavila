import axios from 'axios';
import config from '../../content/config';

const db = axios.create({
  baseURL: `${config.urlDev}/`,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

export default db;
