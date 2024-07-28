const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("You are on  Home page Bro  ");
});

app.listen(port, (req, res) => {
  console.log("sever is running on 3000 port");
});
