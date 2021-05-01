// const response = require("../../helper/response");
const jwt = require("jsonwebtoken");
function Auth(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;

      next();
    });
  } catch (error) {
    throw new error();
  }
}

module.exports = Auth;
