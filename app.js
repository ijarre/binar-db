const express = require("express");

const users = require("./data/user.json");
const { user_game } = require("./models");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => res.status(200).render("main"));
app.get("/suwit", (req, res) => res.status(200).render("suwit"));
app.get("/login", (req, res) => {
  res.status(200).render("login");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (typeof user !== undefined) {
    console.log(user);
    res.redirect("/");
  }

  res.status(403).json(user);
});

app.get("/dashboard", (req, res) => {
  user_game.findAll().then((users) => {
    res.render("dashboard", { users });
  });
});

app.post("/create", (req, res) => {
  console.log(req.body);
  user_game
    .create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    .then(res.send("akun berhasil dibuat"));
});

app.get("/edit/:id", (req, res) => {
  user_game
    .findOne({ where: { id: req.params.id } })
    .then((user) => res.render("update", { user }));
});

app.post("/update/:id", (req, res) => {
  console.log(req.body);
  user_game
    .update(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      {
        where: { id: req.params.id },
      }
    )
    .then(() => res.redirect("/dashboard"));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
  next();
});

app.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    errors: "Page not found",
  });
  next();
});

app.listen(port, () =>
  console.log("Server started at http://localhost:" + port)
);
