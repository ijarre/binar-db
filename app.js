const express = require("express")

const users = require("./data/user.json")
const { user_game } = require("./models")
const app = express()

const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(express.static("./public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/", (req, res) => res.status(200).render("main"))
app.get("/suwit", (req, res) => res.status(200).render("suwit"))
app.get("/login", (req, res) => {
  res.status(200).render("login")
})

app.post("/login", (req, res) => {
  const { username, password } = req.body
  const user = users.filter(
    (user) => user.username === username && user.password === password
  )
  if (user.length !== 0) {
    res.redirect("/dashboard")
  }

  res.redirect("/login")
})

app.get("/dashboard", (req, res) => {
  user_game.findAll().then((unsortedUsers) => {
    const users = unsortedUsers.sort((a, b) => {
      return a.dataValues.id - b.dataValues.id
    })

    res.render("dashboard", { users })
  })
})

app.get("/create", (req, res) => {
  res.render("form")
})

app.post("/create", (req, res) => {
  user_game
    .create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    .then(() => res.redirect("/dashboard"))
})

app.get("/edit/:id", (req, res) => {
  user_game
    .findOne({ where: { id: req.params.id } })
    .then((user) => res.render("update", { user }))
})

app.post("/update/:id", (req, res) => {
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
    .then(() => res.redirect("/dashboard"))
})
app.get("/delete/:id", (req, res) => {
  console.log("asdsa")
  user_game
    .destroy({
      where: { id: req.params.id },
    })
    .then(() => res.redirect("/dashboard"))
    .catch((err) => console.log(err))
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    status: "fail",
    errors: err.message,
  })
  next()
})

app.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    errors: "Page not found",
  })
  next()
})

app.listen(port, () =>
  console.log("Server started at http://localhost:" + port)
)
