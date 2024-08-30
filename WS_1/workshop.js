var http = require("http"); // so we can access the server from our webpage
// send the http header, HTTP status: 200: OK, Content type: text/plain
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      // send the response body as "first node.js ..."
      res.write("Some more text here\n");
      res.end("First node.js server\n");
    } else if (req.url === "/information") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      // send the response body as "first node.js ..."
      res.write("Contact Info\n");

      res.end("Phone number\n");
    } else if (req.url === "/myBlog") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        `<table border ="1" >
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
          </tr>
          <tr>
            <td>Matti</td>
            <td>Maija</td>
            <td>Meikäläinen</td>
          </tr>
          <tr>
            <td>Timotie</td>
            <td>Asematie</td>
            <td>Hallitustie</td>
          </tr>
          <tr>
            <td>Kerava</td>
            <td>Tampere</td>
            <td>Espoo</td>
          </tr>
        </table>`
      );
      res.end("<h1>This is the home page of my blog</h1>");
    }
  })
  .listen(3000); // listen to port 3000
// console will print the message
console.log("Server running at http://localhost:3000/");
