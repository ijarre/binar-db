const express = require("express");
const UserController = require("./user.controller");

const userRouter = express.Router();
const userController = new UserController();

userRouter.route("/login").post(userController.login);

module.exports = userRouter;
