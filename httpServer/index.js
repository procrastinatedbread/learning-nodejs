const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/userAPI/userapi.json`, "utf8");
  const objData = JSON.parse(data);
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the other side ");
  } else if (req.url == "/about") {
    res.end("Hello from the about us side ");
  } else if (req.url == "/contact") {
    res.end("Hello from the contact us page");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[2].name);
  } else {
    res.writeHead(404);
    res.end("<h1>404- page not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port 8000");
});
