const http = require("http");
const fs = require("fs");
const url = require("url");
const { log } = require("console");

const server = http.createServer((req, res) => {
  let data = `${Date.now()} : ${req.method} ${
    url.parse(req.url).path
  } Request Received\n`;

  fs.appendFile("log.txt", data, "utf-8", (err) => {
    console.log("written..");
  });

  switch (url.parse(req.url).pathname) {
    case "/":
      res.end("Home Page");
      break;
    case "/about":
      let name = url.parse(req.url, true).query.name;
      res.end(`Hi,${name}`);
      break;
    default:
      res.end("404 Not Found");
      break;
  }
});

server.listen(5000, () => {
  console.log("Listening...");
});
