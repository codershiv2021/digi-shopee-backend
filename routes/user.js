// const router = require("express").Router()

// router.get("/usertest", (req,res)=>{
//       res.send("user test is successful");
// })

// router.post("/userposttest", (req,res)=>{
//       const username = req.body.username;
//       res.send("your username is : " + username);
// })

// module.exports = router;

const User = require ("../models/User");
const {
      verifyToken,
      verifyTokenAndAuthorization,
    } = require("./verifyToken");
    
const router = require("express").Router();
