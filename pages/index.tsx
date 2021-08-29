import React, { FC, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

import { attributes } from '../content/home.md';

const Home: FC = () => {
  const { title, cats } = attributes;

  useEffect(() => {
    const thisWindow = window as any;
    if (thisWindow.netlifyIdentity) {
      thisWindow.netlifyIdentity.on('init', (user) => {
        if (!user) {
          thisWindow.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Netlify CMS && Next.js Starter</title>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <nav>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/blog">
          <a>blog</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </nav>
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
