import React from 'react';
import Router from 'next/router';
import db from '../src/components/Helpers/ApiFetch';

import SocialFooter from '../src/components/Footer/SocialFooter';
import Schedule from '../src/components/Visit/Schedule';
import GuestView from '../src/components/Visit/GuestView';
import Header from '../src/components/Header/Header';
import ErrorBox from '../src/components/Helpers/ErrorBox';
import enums from '../src/content/enums';

export default class Visit extends React.Component {
  static async getInitialProps({ query }) {
    if (query.id && query.isLogged && query.type_id) {
      if (Number(query.type_id) === enums.userType.consultant) {
        const res = await db.post('/visitschedule');
        if (res) {
          return { data: res.data };
        }
      }
      if (Number(query.type_id) === enums.userType.guest) {
        const res = await db(`/visit/${query.id}`);
        if (res) {
          return { data: res.data };
        }
      }
    }
    return { data: [] };
  }

  constructor(props) {
    super(props);
    this.state = {
      data: props.data || [],
    };
  }

  componentDidUpdate() {
    const { user, isLogged } = this.props;
    const { data } = this.state;
    if (user.id && isLogged) {
      if (data.length === 0) {
        if (Number(user.type_id) === enums.userType.consultant) {
          return this.handleConsultant(user);
        }
        if (Number(user.type_id) === enums.userType.guest) {
          return this.handleGuest(user);
        }
        return { data: [] };
      }
      return null;
    }
    if (
      Object.keys(user).length > 0
      && user.constructor === Object
      && !isLogged
    ) {
      Router.push('/userarea');
    }
    return null;
  }

  handleGuest = (user) => this.getDataGuest(user.id).then((res) => {
    this.setState({
      data: res.data,
    });
  });

  handleConsultant = () => this.getDataConsultant().then((res) => {
    this.setState({
      data: res.data,
    });
  });

  getDataGuest = async (id) => {
    const res = await db(`/visit/${id}`);
    if (res) {
      return Promise.resolve({ success: true, data: res.data });
    }
    return Promise.reject(Error({ success: false, data: res.data }));
  };

  getDataConsultant = async () => {
    const res = await db.post('/visitschedule');
    if (res) {
      return Promise.resolve({ success: true, data: res.data });
    }
    return Promise.reject(Error({ success: false, data: res.data }));
  };

  render() {
    const { data } = this.state;

    const {
      user,
      isLogged,
      logOut,
      openModalLogin,
      openModalUser,
    } = this.props;

    return (
      <div>
        {isLogged ? (
          <>
            <Header
              user={user}
              isLogged={isLogged}
              logOut={logOut}
              openModalLogin={openModalLogin}
              openModalUser={openModalUser}
            />
            {data.length > 0 ? (
              <div>
                {user && user.type_id === enums.userType.consultant ? (
                  <Schedule data={data} />
                ) : null}
                {user && user.type_id === enums.userType.guest ? (
                  <GuestView data={data} />
                ) : null}
              </div>

            ) : (
              <div className="no-content">
                <h3>Não há itens para serem exibidos</h3>
              </div>
            )}

            <SocialFooter />
          </>
        ) : (
          <ErrorBox
            auth
            user={user}
            isLogged={isLogged}
            logOut={logOut}
            openModalLogin={openModalLogin}
            openModalUser={openModalUser}
          />
        )}
      </div>
    );
  }
}
