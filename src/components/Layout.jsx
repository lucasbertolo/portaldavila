import React from 'react';
import Head from 'next/head';

import '../assets/scss/main.scss';

export default ({ children, title, description }) => (
  <div className="layout">
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content="Imobiliaria Piracicaba, Remax, Portal, imoveis, Sao Paulo, locação, venda, casas, aluguel, venda" />
      <meta name="theme-color" content="#000000" />
      {/* <meta name="google-site-verification" content="ktGEjKpbyoadkV31kgWVammGB4BnbfbwRA6zhkUzLD4" /> */}
      {/* <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <link rel="manifest" href="/static/manifest/manifest.json" /> */}
      <link rel="canonical" href="" />

    </Head>
    {children}
  </div>
);
