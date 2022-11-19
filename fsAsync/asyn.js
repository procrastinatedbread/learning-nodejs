// const fs = require("fs");
// fs.readFile("read.txt", "utf8", (err, data) => {
//   console.log(data);
// });
// console.log("ummmmmm visit again");
const fs = require("fs");
const data = fs.readFileSync("read.txt", "utf8");
console.log(data);
console.log("ummmmmmm thanks");
