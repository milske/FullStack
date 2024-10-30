var http = require("http");
var axios = require("axios");

var PORT = process.env.PORT || 3000;

// Create the server
http
  .createServer((req, res) => {
    if (req.url === "/") {
      // Fetch data from the OMDb API using Axios
      axios
        .get("http://www.omdbapi.com/?s=wars&apikey=ce7aa1bf")
        .then((response) => {
          var movies = response.data.Search; // Extract movie results from API

          // Start the HTML response
          let html = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Movie Search Results</title>
            <style>
              table { width: 100%; border-collapse: collapse; }
              th, td { padding: 8px 12px; border: 1px solid #ddd; text-align: left; }
              th { background-color: #f4f4f4; }
            </style>
          </head>
          <body>
            <h1>Movie Search Results for "wars"</h1>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>IMDB ID</th>
                  <th>Poster</th>
                </tr>
              </thead>
              <tbody>
        `;

          // Loop through the movies and create table rows
          movies.forEach((movie) => {
            html += `
            <tr>
              <td>${movie.Title}</td>
              <td>${movie.Year}</td>
              <td>${movie.imdbID}</td>
              <td><img src="${movie.Poster}" alt="${movie.Title}" width="100"></td>
            </tr>
          `;
          });

          // Close the table and HTML tags
          html += `
              </tbody>
            </table>
          </body>
          </html>
        `;

          // Send the HTML response to the browser
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(html);
          res.end();
        });
    }
  })
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
