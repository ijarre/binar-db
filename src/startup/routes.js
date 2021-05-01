const express = require("express");
// const middleware = require("../api/middleware");
const api = require("../api");
const router = express.Router();
const middleware = require("../api/middleware");

router.use("/", api.userRouter);
router.use("/", middleware, api.showUserRouter);

module.exports = router;
