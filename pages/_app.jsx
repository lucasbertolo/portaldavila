/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';

import '../src/assets/scss/main.scss';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
    // <Layout>
      <Component {...pageProps} />
    // </Layout>
    );
  }
}

export default MyApp;
