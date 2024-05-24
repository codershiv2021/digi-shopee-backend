const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }, //unique hona chahiye and required true
    password: { type: String, required: true }, // required hai ye true .. maynot be unique
    isAdmin: {
      type: Boolean, //capital B .. Boolean
      default: false,
    }, //admin if user hai ya nahi .. ise by default user is not admin so change in mongodb to true if want a user to be admin
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);