const jwt = require("jsonwebtoken");

class UserLoginController {
  async login(req, res) {
    try {
      const user = {
        email: req.body.email,
        uid: req.body.uid,
      };
      const token = await jwt.sign(user, process.env.TOKEN_SECRET);
      const data = {
        token: token,
      };
      res.json(data);
    } catch (error) {
      console.log(error);
      response.errorInternal(res);
    }
  }
}

module.exports = UserLoginController;
