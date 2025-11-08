const withNextIntl = require('next-intl/plugin')('./src/i18n.js');

module.exports = withNextIntl({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
});