import React from 'react';
import Layout from '../components/layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <p>hello word</p>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
