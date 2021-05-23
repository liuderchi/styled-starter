const assetPrefix = process.env.ENV_GH_PAGES ? '/styled-starter' : ''

module.exports = {
  async redirects() {
    return [
      {
        // https://github.com/vercel/next.js/blob/canary/examples/redirects/next.config.js
        source: '/',
        destination: '/products',
        permanent: false,
      },
    ]
  },
  assetPrefix: assetPrefix,
}
