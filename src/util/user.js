import { db } from '../components/Helpers/ApiFetch';
import enums from '../content/enums';

const storeToken = (token) => {
  window.sessionStorage.setItem('remax-portal-token', token);
};

const checkToken = () => {
  const token = window.sessionStorage.getItem('remax-portal-token');
  let isLogged = false;
  let user = {};

  if (token) {
    return db.post('/signin', {
      token,
    })
      .then((res) => {
        if (res.data) {
          isLogged = true;
          user = res.data;
          return Promise.resolve({ isLogged, user });
        }
        return Promise.reject();
      })
      .catch();
  }

  return Promise.resolve();
};


const loadUser = (data) => {
  const { loginUsername, loginPassword } = data;
  let isLogged = false;
  let user = {};

  return db.post('/signin', {
    username: loginUsername,
    password: loginPassword,
  })
    .then((res) => {
      if (res.data.userId) {
        isLogged = true;
        user = res.data.user;
        storeToken(res.data.token);
        return Promise.resolve({ isLogged, user });
      }
      return Promise.reject();
    })
    .catch(() => Promise.reject(Error({ msg: 'Usuário e/ou senha inválidos' })));
};

const registerGuest = (data) => {
  const { registerUsername, registerEmail, registerPassword } = data;
  let isLogged = false;
  let user = {};

  return db.post('/register', {
    username: registerUsername,
    email: registerEmail,
    password: registerPassword,
    phone: '3333-2222',
    type_id: enums.userType.consultant,
  })
    .then((res) => {
      if (res.data.existUser) {
        return Promise.resolve({ existUser: true });
      }
      if (res.data.userId) {
        isLogged = true;
        user = res.data;
        return Promise.resolve({ isLogged, user });
      }
      return Promise.reject();
    })
    .catch(() => Promise.reject());
};

export {
  storeToken, checkToken, loadUser, registerGuest,
};
