import db from '../components/Helpers/ApiFetch';
import enums from '../content/enums';

const storeToken = (token) => {
  window.sessionStorage.setItem('remax-portal-token', token);
};

const removeToken = () => {
  window.sessionStorage.removeItem('remax-portal-token');
};

const getUserInfo = (id) => db
  .get(`/user/${id}`)
  .then((item) => {
    const isLogged = true;
    const user = item.data;
    return Promise.resolve({ isLogged, user });
  })
  .catch(() => {
    const isLogged = false;
    const user = {};
    return Promise.resolve({ isLogged, user });
  });

const checkToken = () => {
  const token = window.sessionStorage.getItem('remax-portal-token');
  let isLogged = false;
  let user = {};

  if (token) {
    return db
      .post('/signin', {
        token,
      })
      .then((res) => {
        if (res.data.userId) {
          return getUserInfo(res.data.userId)
            .then((x) => {
              isLogged = x.isLogged;
              user = x.user;
              return Promise.resolve({ isLogged, user });
            })
            .catch();
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

  return db
    .post('/signin', {
      username: loginUsername,
      password: loginPassword,
    })
    .then((res) => {
      const { userId, token } = res.data;
      if (userId) {
        storeToken(token);
        return getUserInfo(userId)
          .then((x) => {
            isLogged = x.isLogged;
            user = x.user;
            return Promise.resolve({ isLogged, user });
          })
          .catch();
      }
      return Promise.reject();
    })
    .catch(() => Promise.reject(Error({ msg: 'Usuário e/ou senha inválidos' })));
};

const registerUser = (data, type_id) => {
  const {
    registerUsername, registerEmail, registerPassword, registerPhone,
  } = data;
  let isLogged = false;
  let user = {};

  return db
    .post('/register', {
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
      phone: registerPhone,
      type_id: type_id || enums.userType.guest,
      // type_id: enums.userType.admin
    })
    .then((res) => {
      if (res.data.existUser) {
        return Promise.resolve({ existUser: true });
      }
      if (res.data.userId) {
        return getUserInfo(res.data.userId)
          .then((x) => {
            isLogged = x.isLogged;
            user = x.user;
            return Promise.resolve({ isLogged, user });
          })
          .catch();
      }
      return Promise.reject();
    })
    .catch(() => Promise.reject());
};

export {
  storeToken, checkToken, loadUser,
  registerUser, removeToken, getUserInfo,
};
