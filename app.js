const express = require("express");
const path = require("path");
const routes = require("./src/startup/routes");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.static(path.join(__dirname, "src")));
app.use(bodyParser.json());
app.use(routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/landing-page/index.html"));
});
app.get("/suwit", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/page-component-suwit/index.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
