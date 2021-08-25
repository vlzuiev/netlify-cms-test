import React from 'react';

import { NextPage, NextPageContext } from 'next';
import Img from 'next/image';
import Link from 'next/link';

const importBlogPosts = async (): Promise<any> => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context('../../content/blogPosts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/blogPosts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

interface BlogProps {
  postsList: any;
}

const Blog: NextPage<BlogProps> = (props) => {
  const { postsList } = props;
  return (
    <div className="blog-list">
      {postsList.map((post) => {
        return (
          <Link key={post.attributes.title} href={`blog/post/${post.slug}`}>
            <a>
              <Img src={post.attributes.thumbnail} width="100" height="100" />
              <h2>{post.attributes.title}</h2>
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

Blog.getInitialProps = async ({ query }: NextPageContext) => {
  const postsList = await importBlogPosts();

  return { postsList };
};

export default Blog;
