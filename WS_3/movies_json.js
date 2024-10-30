var axios = require("axios");

axios
  .get("http://www.omdbapi.com//?s=wars&apikey=ce7aa1bf")
  .then((response) => {
    var json = response.data; // assign the data to variable json
    console.log(JSON.stringify(json, null, 2));

    for (var i = 0; i < 10; i++) {
      console.log(json.Search[i].Title);
    }
  });
