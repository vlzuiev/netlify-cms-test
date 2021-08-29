import fs from 'fs';
import path from 'path';

import React from 'react';

import matter from 'gray-matter';
import { GetStaticPropsResult, NextPage } from 'next';

interface AboutProps {
  title: string;
  content: string;
}

const About: NextPage<AboutProps> = ({ title, content }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>{content}</div>
    </>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<AboutProps>> {
  const aboutPath = path.join(process.cwd(), 'content/about.mdx');

  const source = fs.readFileSync(aboutPath);

  const { content, data } = matter(source);
  return {
    props: {
      content,
      title: data.title,
    },
  };
}

export default About;
