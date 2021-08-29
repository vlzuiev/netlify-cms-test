import { CmsConfig } from 'netlify-cms-core';

export const config: CmsConfig = {
  local_backend: true,
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  // backend: {
  //   name: 'github',
  //   branch: 'master',
  //   repo: 'vlzuiev/netlify-cms-test',
  // },
  media_folder: 'public/img',
  public_folder: 'img',
  publish_mode: 'editorial_workflow',
  slug: {
    encoding: 'ascii',
    clean_accents: true,
    sanitize_replacement: '_',
  },
  collections: [
    {
      name: 'config',
      label: 'Config',
      delete: false,
      editor: {
        preview: false,
      },
      files: [
        {
          name: 'general',
          label: 'Site Config',
          file: 'config.json',
          description: 'General site settings',
          fields: [
            { label: 'URL', name: 'base_url', widget: 'string', hint: 'Do not enter the trailing slash of the URL' },
            { label: 'Site title', name: 'site_title', widget: 'string' },
            {
              label: 'Site description',
              name: 'site_description',
              widget: 'string',
            },
            {
              label: 'Site keywords',
              name: 'site_keywords',
              widget: 'list',
              summary: '{{fields.keyword.keyword}}',
              field: {
                label: 'Keyword',
                name: 'keyword',
                widget: 'string',
              },
            },
            { label: 'Twitter account', name: 'twitter_account', widget: 'string' },
            { label: 'GitHub account', name: 'github_account', widget: 'string' },
          ],
        },
      ],
    },
    {
      name: 'pages',
      label: 'Pages',
      extension: 'mdx',
      format: 'frontmatter',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/home.mdx',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Publish Date', name: 'date', widget: 'datetime' },
            { label: 'Body', name: 'body', widget: 'markdown' },
          ],
        },
        {
          label: 'About',
          name: 'about',
          file: 'content/about.mdx',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Publish Date', name: 'date', widget: 'datetime' },
            { label: 'Body', name: 'body', widget: 'markdown' },
          ],
        },
      ],
    },
    {
      label: 'Blog',
      name: 'blog',
      extension: 'mdx',
      format: 'frontmatter',
      folder: 'content/posts/',
      identifier_field: 'slug',
      summary: '{{title}}',
      create: true,
      slug: '{{slug}}',
      fields: [
        { label: 'Title', name: 'title', widget: 'string', required: true },
        { label: 'Publish Date', name: 'date', widget: 'datetime', required: true },
        { label: 'Featured Image', name: 'thumbnail', widget: 'image', required: true },
        { label: 'Body', name: 'body', widget: 'markdown', required: true },
      ],
    },
  ],
};
