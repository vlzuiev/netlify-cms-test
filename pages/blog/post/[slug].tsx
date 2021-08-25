import React from 'react';

import { NextPage, NextPageContext } from 'next';
import Img from 'next/image';

interface PostProps {
  blogpost: any;
}

const Post: NextPage<PostProps> = ({ blogpost }) => {
  if (!blogpost) return <div>not found</div>;
  const {
    html,
    attributes: { thumbnail, title },
  } = blogpost.default;

  return (
    <>
      <article>
        <h1>{title}</h1>
        <Img src={thumbnail} width="100" height="100" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <style jsx>{`
        article {
          margin: 0 auto;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </>
  );
};

Post.getInitialProps = async ({ query }: NextPageContext) => {
  const { slug } = query;
  const blogpost = await import(`../../../content/blogPosts/${slug}.md`).catch((error) => null);

  return { blogpost };
};

export default Post;
