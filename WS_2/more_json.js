var data = require("./persons.json");
var http = require("http");

data.forEach((person) => {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Company: ${person.company}`);
  console.log(`Address: ${person.address}`);
  console.log("---------------------------------");
});

var output;
output = '<table border="1">';

for (var i = 0; i < data.length; i++) {
  output += "<tr>";
  output += "<td>" + data[i].name + "</td>";
  output += "<td>" + data[i].company + "</td>";
  output += "<td>" + data[i].address + "</td>";
  output += "<tr>";
}
output += "</table>";
console.log(output);

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(output);
  res.end();
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:3000/");
