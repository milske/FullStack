var express = require("express");
var fs = require("fs");
var app = express();
// app.use(express.static("./public/demosite"));
// require the modul required for using form data
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); // for parsing

//route to serve the form
app.get("/adduser", function (req, res) {
  res.status(200).sendFile(__dirname + "/public/demosite/adduser.html");
});

// Route to handle form submission and save data to JSON file
app.post("/adduser", function (req, res) {
  var data = require("./exampledata2.json");

  data.push({
    Name: req.body.name,
    Company: req.body.company,
    Email: req.body.email,
    Date: new Date(),
  });

  //convert the json object to a string format
  var jsonStr = JSON.stringify(data);

  //write data to the file
  fs.writeFile("exampledata2.json", jsonStr, (err) => {
    if (err) throw err;
    console.log("It's saved");
  });
  res
    .status(200)
    .send(
      "Saved the data to a file. Browse to the /details to see the contents of the file"
    );
});

app.get("/", function (req, res) {
  res.status(200).sendFile(__dirname + "/public/demosite/index.html");
});

app.get("/list", function (req, res) {
  res.status(200).sendFile(__dirname + "/exampledata.txt");
});

app.get("/jsondata", function (req, res) {
  res.status(200).sendFile(__dirname + "/exampledata2.json");
});

app.get("/details", function (req, res) {
  var data = require("./exampledata2.json");
  //parse the results into a variable
  var results = '<table border="1">';

  for (var i = 0; i < data.length; i++) {
    results += "<tr>";
    results += "<td>" + data[i].Name + "</td>";
    results += "<td>" + data[i].Email + "</td>";
    results += "</tr>";
  }
  results += "</table>";
  res.status(200).send(results);
});

// the 404 route, always keep this as the last route
app.get("/*", function (req, res) {
  res.status(404).send("Cant find the page requested");
});

app.listen(8081);
console.log("8081 is the magic port");
