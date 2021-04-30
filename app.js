const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("src"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/landing-page/index.html"));
});
app.get("/suwit", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/page-component-suwit/index.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
