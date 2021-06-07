module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {},
        },
      ],
    });

    return config;
  },

  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
};
