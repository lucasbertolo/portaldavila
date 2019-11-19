import axios from 'axios';
import config from '../../content/config';

const db = axios.create({
  baseURL: `${config.urlProd}/`,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

export {
  // eslint-disable-next-line import/prefer-default-export
  db,
};
