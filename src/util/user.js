import { db } from '../components/Helpers/ApiFetch';

const loadUser = async (username, password) => {
  const request = await db.post('/user', {
    auth: {
      username,
      password,
    },
  });

  if (request.status === 200) return true;

  return false;
};

const storeToken = (token) => {
  window.sessionStorage.setItem('remax-portal-token', token);
};

export {
  loadUser,
  storeToken,
};
