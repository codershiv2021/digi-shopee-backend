const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
//jwt use to token create 


//REGISTER

router.post("/register", async(req,res)=>{
      const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:req.body.password
      });
      
      try{
            const savedUser= await newUser.save(); 
            
//this will save user to database hmara
//instead of above line we can't do const savedUser = newUSer.save()
//reason it takes time to save in database so use await then next line
//else savedUser me kuch nahi hoga as it takes time few miliseconds
//That's why we use async keyword above and await keyword upar
//thus becomes async function 
//await - waits for response from promise .. if success
            res.status(201).json(savedUser);  

//this line is used to send response to client 201 that successfully registered ... 
//and send response in json format which has email, usernmae, pass 
//status 200 is successful, 201 is successfull added hota 
}
      catch(err){
            console.log("err");
            res.status(300).json(err); 
      }
      //error ka kuch bhi can take 300 400 ...
})


//LOGIN

router.post('/login', async (req, res) => {
      try {
          const user = await User.findOne({
              username: req.body.username
          });
//await to wait and findOne to find username of 
            if (!user) {
                return res.status(401).json("Wrong User Name");
            }
  
          const storedPassword = user.password;
          const inputPassword = req.body.password;
  
          if (storedPassword !== inputPassword) {
              return res.status(401).json("Wrong Password");
          }

          const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
//token is our user ka id .. see mongodb random bada number hai 
//user id that is we use as token
                //here isadmin id bhi used lama but i not using
            },
            process.env.JWT_SEC,
                {expiresIn:"3d"} //expired in 3 days
            );
      
            const { password, ...others } = user._doc;  
            res.status(200).json({...others, accessToken});
  
      } catch (err) {
        res.status(500).json(err);
      }
  });
  module.exports = router;