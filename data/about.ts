import { getMdxSourceData } from './utils/getMdxContentData';

export interface HomeData {
  title: string;
  source: string;
}

export function loadHomeData(): HomeData {
  const { data, source } = getMdxSourceData<HomeData>('content/home.mdx');

  return {
    title: data.title,
    source,
  };
}
