var axios = require("axios");
var http = require("http"); // this is required for server

var fetchedData = null; // to hold the API data

axios
  .get("http://www.omdbapi.com//?s=wars&apikey=ce7aa1bf")
  .then((response) => {
    fetchedData = response.data; // store fetched data
    console.log("Data fetched");
  });

var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/json" });
    res.write(JSON.stringify(fetchedData));
    res.end("");
  }
});

var port = process.env.PORT || 3000; //  use port 3000 unless there exists a preconfigured port
server.listen(port); // server listening the port

// console will print the message
console.log("Server running at http://localhost:3000/");
