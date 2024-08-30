var http = require("http"); // so we can access the server from our webpage
// send the http header, HTTP status: 200: OK, Content type: text/plain
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      // send the response body as "first node.js ..."
      res.end("First node.js server\n");
    }
    if (req.url === "/myBlog") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is the home page of my blog</h1>");
    }
  })
  .listen(3000); // listen to port 3000
// console will print the message
console.log("Server running at http://localhost:3000/");
