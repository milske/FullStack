var fs = require("fs");

fs.readdir(".", function (err, data) {
  if (err) throw err;
  console.log("result of readdir: ");
  console.log(data.toString());
  console.log(data); // JSON object
});
console.log("Program Ended");
