import fs from 'fs';

import React from 'react';

import { GetStaticPaths, GetStaticPropsResult, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { loadPost, PostData, postsDirectory } from '../../../data/posts';

interface PostProps {
  post: PostData;
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <article>
        <h1>{post.title}</h1>
        <img src={post.thumbnail} />
        <MDXRemote {...post.source} />
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

export const getStaticPaths: GetStaticPaths = () => {
  const paths = fs.readdirSync(postsDirectory).map((blogName) => {
    return `/blog/post/${blogName.substring(0, blogName.length - 4)}`;
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }): Promise<GetStaticPropsResult<PostProps>> {
  const post = await loadPost(params.slug);

  return {
    props: {
      post,
    },
  };
}

export default Post;
