// On production, variables are set with `ENV`. On development, they use the .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv-flow").config();
}

module.exports = {
  env: {
    FIREBASE_PUBLIC_API_KEY: process.env.FIREBASE_PUBLIC_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  },
};
