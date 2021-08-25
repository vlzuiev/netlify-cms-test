import { FC } from 'react';

import Head from 'next/head';
import Script from 'next/script';

import { attributes } from '../content/home.md';

const Home: FC = () => {
  const { title, cats } = attributes;

  return (
    <>
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <article>
        <h1>{title}</h1>
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
      <style jsx>{`
        h1,
        div {
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Home;
