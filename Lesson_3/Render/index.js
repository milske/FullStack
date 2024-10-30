var PORT = process.env.PORT || 3000;
var http = require("http");

// create server object
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      '<figure><img src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></figure>'
    );
    response.write("Source: https://scoutapm.com/"); // write a response to the client
    response.end(""); // end response
  })
  .listen(PORT); // the server object listens on port

console.log("Server running at http://localhost:3000/");
