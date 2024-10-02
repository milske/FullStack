var fs = require("fs");

console.log("Program Started");
var data = fs.readFileSync("example.txt");
var data1 = fs.readFileSync("example1.txt");
console.log(data.toString());
console.log(data1.toString());
console.log("Program ended");
