import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getMdxSourceData } from './utils/getMdxContentData';

export interface HomeData {
  title: string;
  source: MDXRemoteSerializeResult;
}

export async function loadHomeData(): Promise<HomeData> {
  const { data, source } = await getMdxSourceData<HomeData>('content/home.mdx');

  return {
    title: data.title,
    source,
  };
}
