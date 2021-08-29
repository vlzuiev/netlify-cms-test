import React from 'react';

import { NextPage, NextPageContext } from 'next';

interface PostProps {
  blogpost: any;
}

const Post: NextPage<PostProps> = ({ blogpost }) => {
  if (!blogpost) return <div>not found</div>;
  const {
    html,
    attributes: { thumbnail, title },
  } = blogpost.default;
  console.log(blogpost);
  return (
    <>
      <article>
        <h1>{title}</h1>
        <img src={thumbnail} />
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
  const blogpost = await import(`../../../content/blogPosts/${slug}.md`).catch(() => null);

  return { blogpost };
};

export default Post;
