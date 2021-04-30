const express = require("express");
const ShowUserController = require("./showUser.controller");

const userRouter = express.Router();

showUserController = new ShowUserController();

userRouter.route("/showUser").get(showUserController.showUser);

module.exports = userRouter;
