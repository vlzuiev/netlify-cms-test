import React, { FC, useEffect } from 'react';

import { GetStaticPropsResult } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

import { HomeData, loadHomeData } from '../data/home';

const Home: FC<HomeData> = ({ title, source }) => {
  useEffect(() => {
    const w = window as any;
    if (w.netlifyIdentity) {
      w.netlifyIdentity.on('init', (user) => {
        if (!user) {
          w.netlifyIdentity.on('login', () => {
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
        <Script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
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
      </article>
      <MDXRemote {...source} />
    </>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeData>> {
  const { title, source } = await loadHomeData();

  return {
    props: {
      title,
      source,
    },
  };
}

export default Home;
