import React from 'react';

import { GetStaticPropsResult, NextPage } from 'next';
import Link from 'next/link';

import { loadPosts, PostData } from '../../data/posts';

interface BlogProps {
  postsList: PostData[];
}

const Blog: NextPage<BlogProps> = ({ postsList }) => {
  return (
    <div className="blog-list">
      {postsList.map((post) => {
        return (
          <Link key={post.title} href={`/blog/post/${post.slug}`}>
            <a>
              <img src={post.thumbnail} />
              <h2>{post.title}</h2>
            </a>
          </Link>
        );
      })}
      <style jsx>{`
        .blog-list a {
          display: block;
          text-align: center;
        }
        .blog-list img {
          max-width: 100%;

          max-height: 300px;
        }
      `}</style>
    </div>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<BlogProps>> {
  const posts = await loadPosts();

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // TODO: fix mee
      postsList: posts[0],
    },
  };
}

export default Blog;
