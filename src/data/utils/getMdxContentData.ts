import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

interface SourceData<Data> {
  source: MDXRemoteSerializeResult;
  data: Data;
}

export async function getMdxSourceData<Data>(contentPath: string): Promise<SourceData<Data>> {
  const aboutPath = path.join(process.cwd(), contentPath);

  const source = fs.readFileSync(aboutPath);
  const { content, data } = matter(source);

  return {
    data: data as Data,
    source: await serialize(content),
  };
}
