const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the other side ");
  } else if (req.url == "/about") {
    res.end("Hello from the about us side ");
  } else if (req.url == "/contact") {
    res.end("Hello from the contact us page");
  } else {
    res.writeHead(404);
    res.end("<h1>404- page not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port 8000");
});
