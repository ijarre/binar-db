const jwt = require("jsonwebtoken");

class ShowUserController {
  async showUser(req, res) {
    try {
      res.json(req.user);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ShowUserController;
