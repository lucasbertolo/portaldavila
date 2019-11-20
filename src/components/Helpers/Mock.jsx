
import axios from 'axios';

const Mock = () => axios.get('https://dog.ceo/api/breeds/image/random')
  .then((res) => res)
  .catch(() => []);

export default Mock;
