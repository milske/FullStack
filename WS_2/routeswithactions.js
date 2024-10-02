var http = require("http"); // so we can access the server from our webpage
// send the http header, HTTP status: 200: OK, Content type: text/plain
var fs = require("fs");

var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    // send the response body as "first node.js ..."
    res.end("Nothing here to see\n");
  }
  if (req.url === "/frontpage") {
    fs.readFile("frontpage.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      console.log(data.toString());
      res.write(data.toString());
      res.end("End of the form");
    });
  }
  if (req.url === "/contact") {
    fs.readFile("contact.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      //console.log(data.toString());
      res.write(data.toString());
      res.end("End of the form");
    });
  }
  if (req.url === "/json") {
    var data = require("./sampledata.json");
    res.writeHead(200, { "Content-Type": "application/json" });
    data.push({ name: "My Name", gender: "male" });
    var text = JSON.stringify(data);
    res.write(text);
    res.end("");
  }
});

var port = process.env.PORT || 3000; //  use port 3000 unless there exists a preconfigured port
server.listen(port);
console.log("Server is running at http://localhost:%d", port);
