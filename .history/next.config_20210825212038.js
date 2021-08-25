const Mode = require('frontmatter-markdown-loader/mode');
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

console.log(Mode);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
      options: { mode: [Mode.REACT] },
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

module.exports = nextConfig;

// module.exports = {
//   webpack: (configuration) => {
//     configuration.module.rules.push({
//       test: /\.md$/,
//       use: 'frontmatter-markdown-loader',
//       options: { mode: [Mode.REACT] },
//     });
//     return configuration;
//   },
//   async exportPathMap(defaultPathMap) {
//     return {
//       ...defaultPathMap,
//       ...getPathsForPosts(),
//     };
//   },
// };
