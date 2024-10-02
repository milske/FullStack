var axios = require("axios");
var promise = axios
  .get("http://www.omdbapi.com//?s=wars&apikey=ce7aa1bf")
  .then((response) => {
    var data = response.data;
    console.log(data);
  });

console.log(promise);
