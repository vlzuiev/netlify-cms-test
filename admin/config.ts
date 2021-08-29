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
  slug: {
    encoding: 'ascii',
    clean_accents: true,
    sanitize_replacement: '_',
  },
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      extension: 'mdx',
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
      folder: 'content/blogPosts',
      create: true,
      slug: '{{year}}-{{month}}-{{day}}_{{slug}}',
      fields: [
        { label: 'Title', name: 'title', widget: 'string', required: true },
        { label: 'Publish Date', name: 'date', widget: 'datetime', required: true },
        { label: 'Featured Image', name: 'thumbnail', widget: 'image', required: true },
        { label: 'Body', name: 'body', widget: 'markdown', required: true },
      ],
    },
  ],
};
