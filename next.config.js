//To push to vercel WIP (low priority)
// const Dotenv = require("dotenv-webpack");

module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack', 'url-loader'],
      });
      // config.plugins.push(new Dotenv({ silent: true }));
  
      return config;
    },
    env: {
      NEXT_PUBLIC_GSPREADSHEET_ID: process.env.NEXT_PUBLIC_GSPREADSHEET_ID,
      NEXT_PUBLIC_GSHEET_ID: process.env.NEXT_PUBLIC_GSHEET_ID,
      NEXT_PUBLIC_GCLIENT_EMAIL: process.env.NEXT_PUBLIC_GCLIENT_EMAIL,
      NEXT_PUBLIC_GPRIVATE_KEY: process.env.NEXT_PUBLIC_GPRIVATE_KEY
    },
    distDir: 'build'
  };