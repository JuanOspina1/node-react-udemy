// keys.js - figure out what set of credentials to return

// When running on Heroku, NODE_ENV is automatically set to 'production'
if (process.env.NODE_ENV === "production") {
  // We are in production
  module.exports = require("./prod");
} else {
  // We are in development
  module.exports = require("./dev");
}
