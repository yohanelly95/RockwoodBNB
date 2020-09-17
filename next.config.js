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
      GSPREADSHEET_ID: '1aa5FiiKe0xNtbTTHXo7sO1kWgK74zyHdvOlSZRjpzB0',
      GSHEET_ID: '0',
      GCLIENT_EMAIL: 'demo-403@proven-outpost-289813.iam.gserviceaccount.com',
      GPRIVATE_KEY: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4Sja6TGaY2IX0\n4gtIE71YZPvxC/XrFpKEOcXWbCbRu8KM/YU4IBMnGWKvA+g2mOvNqDj2DnS4sc7/\nTRez+IFee+mK15zFh8bON6Xse4ny8c/a/gqxUo/qY4JR3PiGeiIR7xV+TCaZuilI\n7ae4xuZfyqU6FHIrTHYDXJAwX1GHHyl+pwEgeEMTXbb0MaFXfz8EiDb/m3LF8Acx\n1d6+Yb6UTjc4Ojs/3xeGCgNHQ3L1zCT0HFxQA/i4RRfkbD72uJglz6T3QQet/tq0\nD50gdn87OFYdfNNBASzFpTNQPexO66Mtc6BoRaRNl0r6CZGDiiMSDFN4DSFErGYR\nJo0AYtVhAgMBAAECggEAQBxZQ6A2hO+2UkWc5Rsw4KJo3ydpCrqUh/lNMNX4/zeR\na9j6UlceMpjrMrVqQCwcxDPEdRz8UBBTUY9xMoO+Ba+XxFxTxogAilbjmwwzJlgn\nFikQcTWmqUSq3m2/65Brb8+7q280coBHwn4ive470JE/v5/DQ/rahzrZUmqmgxml\n6fZ5AYP7vCmm4R8DMKrVBD7NSNYaVgb7tsPDhWBehZTRDvHQBRqV46zchZ8e93od\nO12rrJrLhmKo5lmbBtln+mxhWs+2x2xlreWWNehRcTyZyYu07zpWer/oiPYb4RBO\nbGt4QFBoNF51AoZC+3FD4ctiFOfeUU+x6HPXJDVVrQKBgQDhwOc7rs1y+z+ChOaa\nrxVunUyJlaHy++iMolZbVy0ZXS71cXpDM/ulPwhoVoFjvD6+mFAIT5rAwAZcFSaP\nojenBaVveeSTnOhK5Pc/Urd4nBq//dgPbPDC4sq0xhKdvgGuyA/gwglcRwoJQ3jG\npUSw7jXTbwXG681UDlUjDQwHgwKBgQDQ+yddyDS1QZ1KCoG3guYBakFxY9+GjByA\nZBgmstTMrEyxFnlgF1t1FOJ/+aqS7dwU5rUyZDSIYvtQa2kyVCDWrE32kutRqTAy\nBlNTjsU+GHwQMurhxpNXiaZBfdJeA78OXAx2I20yyJ5rwMqxRTwCngNNscLJ70Ff\nu8Q5kO02SwKBgA8jq54iA98hIEo1dW2MLkjDvb1ATqMH57l+rYHkn76itCJ7oLJf\nCxIy3vJ4UqcImcCYYE2eYQdqGUMVnAdn3omR5F1MdFq93Aohvr79YhZxiY20jUfD\ni4XWRbfHzLnNYzmAaygsewo4LWEfqDrSHIAtCWkLefy0FYn8iBMYreTXAoGBAKft\n2iFjOu+YLUONE9WaKydh8fqjDcB5oIGPbVTTiWp63hnDfH855bU8thGuV2JAHwTw\nqxQ2L3yVRWvHFD5sGgNHbFLClrQFJ4RbTuQrKtaOKEuADvykbEwAgYfJCp2flwx7\n7UuVhi8zxRHDV12BzAoyXWc2e9d3GepK4RB9JBDnAoGBAMRGrsRAutiiZcO0T3Q8\nKlUuxiJ75NU+IOHtwEVs0i4o0XUPa1udB34Db37YUqlv3bV4y7bE9qdFCMMLwKYZ\nHx/DcUZpn9xBVUyWwLdfL0/jff8w3Tv7tnAJoWGZAPKBJLMlRFXdsjaDvBVQWwEh\n8wwP5TJ6PJLsXaJD83qYVM+N\n-----END PRIVATE KEY-----\n'
    }
  };