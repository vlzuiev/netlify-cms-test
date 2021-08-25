import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    // <Container>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </Container>
  );
};

export default MyApp;
