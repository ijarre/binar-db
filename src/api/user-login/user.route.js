const express = require("express");
const UserLoginController = require("./user.controller");

const userRouter = express.Router();
const userLoginController = new UserLoginController();

userRouter.route("/login").post(userLoginController.login);

module.exports = userRouter;
