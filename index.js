const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
// Must call model before passport
require("./models/User");
// The below ensures execution, nothing needs to be imported from passport
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

//Returns a function then immediately call the function
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
