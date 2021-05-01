const express = require("express");
const ShowUserController = require("./showUser.controller");
const auth = require("../middleware/auth");

const userRouter = express.Router();

showUserController = new ShowUserController();

userRouter.route("/showUser").get(auth, showUserController.showUser);

module.exports = userRouter;
