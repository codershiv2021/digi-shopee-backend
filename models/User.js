const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    }, //hata dena as I haven't added isAdmin in verify token and user js in routes
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);