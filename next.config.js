const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const optimizedImages = require('next-optimized-images');
const fs = require('fs');
const blogPostsFolder = './content/blogPosts';

const getPathsForPosts = () => {
  return fs
    .readdirSync(blogPostsFolder)
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        [`/blog/post/${trimmedName}`]: {
          page: '/blog/post/[slug]',
          query: {
            slug: trimmedName,
          },
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForPosts(),
    };
  },
};

module.exports = withPlugins(
  [
    [
      [
        optimizedImages,
        {
          optimizeImagesInDev: true,
          responsive: {
            adapter: require('responsive-loader/sharp'),
          },
        },
      ],
      [
        withPWA,
        {
          pwa: {
            dest: 'public',
          },
        },
      ],
    ],
  ],
  nextConfig
);
