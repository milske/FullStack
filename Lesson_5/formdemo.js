var { res, req } = require("express");
var fs = require("fs");
require("dotenv").config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//lets take body-parser in use
app.use(bodyParser.urlencoded({ extended: true }));

//lets take material from public folder
app.use(express.static("./public"));

app.post("/signin", function (req, res) {
  var email = req.body.email;
  var pass = req.body.pass;

  console.log("Email: " + email);
  console.log("Password: " + pass);

  if (email == process.env.USERID && pass == process.env.PASSWORD) {
    res.redirect("/studentpages");
  } else {
    res
      .status(200)
      .send("Form submitted with email: " + email + " and password: " + pass);
  }
});

app.get("/studentpages", function (req, res) {
  // res.status(200).sendFile(__dirname + "public/studentpages.html");
  res.status(200).send("SECRET PAGE");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
