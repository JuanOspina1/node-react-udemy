const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
// Must call model before passport
require("./models/User");
// The below ensures execution, nothing needs to be imported from passport
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// This requires a max time for the cookie to exist and a key
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// Telling passport to use cookies for authentication
app.use(passport.initialize());
app.use(passport.session());

//Returns a function then immediately call the function
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
