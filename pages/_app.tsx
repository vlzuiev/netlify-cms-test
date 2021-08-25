import React, { FC } from 'react';

import { AppProps } from 'next/app';

import Layout from '../components/layout';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
