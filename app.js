const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "src")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/landing-page/index.html"));
});
app.get("/suwit", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/page-component-suwit/index.html"));
});
app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/page-component-suwit/script.js"));
});
app.get("/game.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/page-component-suwit/game.js"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
