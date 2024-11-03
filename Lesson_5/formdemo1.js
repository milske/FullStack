var express = require("express");
var fs = require("fs");
require("dotenv").config();
var app = express();
var bodyParser = require("body-parser");

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public folder
app.use(express.static("./public"));

// Route to handle POST requests to /signin
app.post("/signin", function (req, res) {
  var email = req.body.email;
  var pass = req.body.pass;

  console.log("Email: " + email);
  console.log("Password: " + pass);

  // Check if email and password match .env credentials
  if (email === process.env.USERID && pass === process.env.PASSWORD) {
    // Respond with a success status
    res.json({ success: true, message: "Redirecting to student page" });
  } else {
    // Respond with a failure status
    res.json({
      success: false,
      message: "Form submitted with email: " + email + " and password: " + pass,
    });
  }
});

// Route to handle student pages
app.get("/studentpages", function (req, res) {
  res.status(200).send("SECRET PAGE");
});

// Start the server
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
