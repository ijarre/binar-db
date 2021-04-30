const express = require("express");
// const middleware = require("../api/middleware");
const api = require("../api");
const router = express.Router();

router.use("/", api.userRouter);
router.use("/", api.showUserRouter);

module.exports = router;