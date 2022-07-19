const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// Telling mongoose to create a new collections called users
mongoose.model("users", userSchema);
