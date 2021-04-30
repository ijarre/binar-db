const jwt = require("jsonwebtoken");

class ShowUserController {
  async showUser(req, res) {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        res.json(user);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ShowUserController;
