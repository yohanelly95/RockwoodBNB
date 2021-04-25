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
      GSPREADSHEET_ID: process.env.GSPREADSHEET_ID,
      GSHEET_ID: process.env.GSHEET_ID,
      GCLIENT_EMAIL: process.env.GCLIENT_EMAIL,
      GPRIVATE_KEY: process.env.GPRIVATE_KEY
    }
  };