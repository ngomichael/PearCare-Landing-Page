module.exports = {
  siteMetadata: {
    title: `PearCare`,
    description: `Easily and quickly get matched to a provider that best fits you.`,
    author: `@michaelngo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PearCare`,
        short_name: `PearCare`,
        start_url: `/`,
        background_color: `#71da71`,
        theme_color: `#71da71`,
        display: `minimal-ui`,
        icon: 'src/images/pear-favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Sarabun`,
            variants: [`400`, `600`, `700`],
          },
          {
            family: `Roboto`,
            variants: [`400`, `600`, `700`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `600`, `700`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
