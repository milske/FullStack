var fs = require("fs");

var data = "This is the data that will be written to the file";
var data1 = "This is the other data";

fs.writeFile("write.txt", data, function (err) {
  if (err) throw err;
  console.log("Data written succesfully");
});

fs.writeFile("write.txt1", data1, function (err) {
  if (err) throw err;
  console.log("Data written succesfully");
});

var combinedData = data + "\n" + data1;

// Write the combined data to the new file "combined.txt" and add the string "I wrote this!" at the top and bottom
var headerFooterString = "I wrote this!\n";

// First, write the header ("I wrote this!")
fs.writeFile("combined.txt", headerFooterString, function (err) {
  if (err) throw err;

  // Then append the combined data in the middle
  fs.appendFile("combined.txt", combinedData, function (err) {
    if (err) throw err;

    // Finally, append the footer ("I wrote this!") at the bottom
    fs.appendFile("combined.txt", "\n" + headerFooterString, function (err) {
      if (err) throw err;
      console.log("Combined data written successfully with header and footer.");
    });
  });
});
