// let http = require("http");

// let server = http.createServer((req, res) => {
//   console.log("hey");
//   res.end("Response found Successfully");
// });

// server.listen(3000, () => {
//   console.log("Server is running on 3000 port");
// });


const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("Response found Successfully");
})

app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});