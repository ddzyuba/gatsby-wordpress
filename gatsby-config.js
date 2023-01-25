module.exports = {
  siteMetadata: {
    title: `gatsby_one`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-wordpress',
      // Don't cache-bust JS or CSS files, and anything in the static directory,
      // since these files have unique URLs and their contents will never change
      dontCacheBustUrlsMatching: /(\.js$|\.css$|static\/)/,
      options: {
        url: 'http://we3travel.test/graphql',
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
          perPage: 10, // currently set to 100
          requestConcurrency: 2, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
        type: {
          MediaItem: {
            exclude: true,
          },
        },
      },
    },
  ],
}
