var data = require("./persons.json");
var http = require("http");

console.log("Original data");
console.log(data);

//add data to the end
data.push({
  name: "John Doe",
  age: "52",
  company: "Laurea",
  address: "Ratatie 22",
});

console.log("Data after adding data ");
console.log(data);

// remove added data
data.pop();

console.log(data);

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/json" });
  res.write(JSON.stringify(data));
  res.end();
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:3000/");
