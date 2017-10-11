module.exports = {
  siteMetadata: {
    title: 'Callum M-R | Front Endgineer'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-favicon',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-61225014-1'
      }
    }
  ]
};
