
import React from 'react';
import Router from 'next/router';
import db from '../src/components/Helpers/ApiFetch';

import { checkToken } from '../src/util/user';
import Header from '../src/components/Header/Header';
import SocialFooter from '../src/components/Footer/SocialFooter';
import enums from '../src/content/enums';
// import Schedule from '../src/components/Visit/Schedule';
import GuestView from '../src/components/Visit/GuestView';
// import enums from '../src/content/enums';

export default class Visit extends React.Component {
  static async getInitialProps({ query }) {
    if (query.id && query.isLogged && query.type_id) {
      if (Number(query.type_id) === enums.userType.consultant) {
        const res = await db.post('/visitschedule');
        if (res) {
          return { data: res.data, isLogged: true };
        }
      }
      if (Number(query.type_id) === enums.userType.guest) {
        const res = await db(`/visit/${query.id}`);
        if (res) {
          return { data: res.data, isLogged: true };
        }
      }
    }
    return { data: {} };
  }

  constructor(props) {
    super(props);
    this.state = {
      data: props.data || [],
      isLogged: props.isLogged || false,
    };
  }


  componentDidMount() {
    const { isLogged } = this.state;

    if (!isLogged) {
      checkToken()
        .then((item) => {
          if (item) {
            if (Number(item.user.type_id) === enums.userType.consultant) {
              return this.handleConsultant(item.user);
            }
            if (Number(item.user.type_id) === enums.userType.guest) {
              return this.handleGuest(item.user);
            }
            return { data: [] };
          }
          Router.push('/userarea');
          return null;
        })
        .catch(() => {
          Router.push('/userarea');
        });
    }
  }

  handleGuest = (item) => this.getDataGuest(item.id)
    .then((res) => {
      this.setState({
        isLogged: item.isLogged,
        data: res.data,
      });
    })

  handleConsultant = (item) => this.getDataConsultant()
    .then((res) => {
      this.setState({
        isLogged: item.isLogged,
        data: res.data,
      });
    })

  getDataGuest = async (id) => {
    const res = await db(`/visit/${id}`);
    if (res) {
      return Promise.resolve({ success: true, data: res.data });
    }
    return Promise.reject(Error({ success: false, data: res.data }));
  }

  getDataConsultant = async () => {
    const res = await db.post('/visitschedule');
    if (res) {
      return Promise.resolve({ success: true, data: res.data });
    }
    return Promise.reject(Error({ success: false, data: res.data }));
  }


  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        {/* <Schedule data={data} /> */}
        <GuestView data={data} />
        <SocialFooter />
      </div>
    );
  }
}
