var http = require("http"); // this is required for server

var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/json" });
    var data = require("./persons.json");
    res.write(JSON.stringify(data));
    res.end("This is end of JSON file\n");
  }
});

var port = process.env.PORT || 3000; //  use port 3000 unless there exists a preconfigured port
server.listen(port); // server listening the port

// console will print the message
console.log("Server running at http://localhost:3000/");
