require("dotenv").config();
const env = process.env;

const config = {
  app: {
    port: env.APP_PORT,
    version: env.APP_VERSION,
  },
  google: {
    key: env.GOOGLE_KEY,
  },
  auth: {
    user: env.USER,
    password: env.PASSWORD,
  },
};

module.exports = config;
