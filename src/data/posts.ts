import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export interface PostData {
  readonly date: string;
  readonly title: string;
  readonly thumbnail: string;
  readonly slug: string;
  readonly source: MDXRemoteSerializeResult;
}

export const postsDirectory = path.join(process.cwd(), 'content/posts');

export async function loadPosts(): Promise<PostData[]> {
  const postsFileNames = fs.readdirSync(postsDirectory);
  const postsAsync = postsFileNames
    .filter((it) => it.endsWith('.mdx'))
    .map(async (fileName) => {
      // Read markdown file as string
      const fullPostFilePath = path.join(postsDirectory, fileName);
      const postFileContents = fs.readFileSync(fullPostFilePath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(postFileContents);

      return {
        date: data.date.toString(),
        title: data.title,
        thumbnail: data.thumbnail,
        source: await serialize(content),
        slug: fileName.substring(0, fileName.length - 4),
      };
    });

  const posts = [];

  await Promise.all(postsAsync).then((postContent) => posts.push(postContent));

  return posts;
}

export async function loadPost(slug: string): Promise<PostData> {
  const source = fs.readFileSync(`${postsDirectory}/${slug}.mdx`);
  const { content, data } = matter(source);

  return {
    date: data.date.toString(),
    title: data.title,
    thumbnail: data.thumbnail,
    slug,
    source: await serialize(content),
  };
}
