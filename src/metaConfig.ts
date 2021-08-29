import config from '../config.json';

interface MetaConfig {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly github_account: string;
}

export default config as MetaConfig;
