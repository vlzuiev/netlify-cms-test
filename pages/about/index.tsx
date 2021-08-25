import React from 'react';

import { NextPage } from 'next';

import content from '../../content/about.md';

const About: NextPage = () => {
  const { attributes, html } = content;

  return (
    <>
      <h1>{attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`
        h1,
        div {
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default About;
