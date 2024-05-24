const User = require ("../models/User");
const {
      verifyToken,
      verifyTokenAndAuthorization,
    } = require("./verifyToken");
    
const router = require("express").Router();
module.exports = router;
