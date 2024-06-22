const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

//ejs setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); //path

//middlewae
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let tasks = [];

app.get("/", (req, res) => {
  res.render("index", { tasks });
});

app.post("/add", (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const taskIndex = req.body.taskIndex;
  tasks.splice(taskIndex, 1);
  res.redirect("/");
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
