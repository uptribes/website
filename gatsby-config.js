module.exports = {
  siteMetadata: {
    title: 'Uptribes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'uptribes',
        short_name: 'uptribes',
        start_url: '/',
        background_color: '#F6AB2B',
        theme_color: '#F6AB2B',
        display: 'minimal-ui',
        icon: 'src/images/uptribes-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
