var data = require("./persons.json");

// original data
console.log(data);

//add a new person
data.push({
  index: 7,
  name: "John Doe",
  address: "123 Elm Street",
});

console.log("After adding a new person");
console.log(data);

//remove last person

data.pop();

console.log("After removing the last person");
console.log(data);
