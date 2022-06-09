module.exports = {
  siteMetadata: {
    title: `voicetrainer`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "jSlQgOkoZtCdY6qWbI6I1HBeSNhIqRL8QCj9G1d8KoE",
      "spaceId": "se3m1swq8j3k"
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};