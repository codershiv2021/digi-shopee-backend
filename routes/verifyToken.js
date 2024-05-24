const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
// because token is of form - bearer "token value" ....
//so we want not [0] but token value .. [1] par hai token value
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};
//ye enough and yehi bas need hai ... verify token 
//to go through other pages

const verifyTokenAndAuthorization = (req, res, next) => {
      verifyToken(req, res, () => {
        if (req.user.id === req.params.id ) {
          next();
//next middleware like the user to change his username ...edit delete

        } else {
          res.status(403).json("You are not alowed to do that!");
        }
      });
    };

    const verifyTokenAndAdmin = (req, res, next) => {
      verifyToken(req, res, () => {
        if (req.user.isAdmin) {
          next();
        } else {
          res.status(403).json("You are not alowed to do that!");
        }
      });
    };

    module.exports = {
      verifyToken,
      verifyTokenAndAuthorization,verifyTokenAndAdmin
    };