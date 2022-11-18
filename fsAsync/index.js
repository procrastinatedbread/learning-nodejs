const { error } = require("console");
const fs = require("fs");
// fs.writeFile("read.txt", "Maaro balam thanedaar chalave gypsy", (err) => {
//   console.log("Padhli file");
//   console.log(error);
// });

// fs.appendFile(
//   "read.txt",
//   "Saare shehar main chaale  se yo rob bairi ka ",
//   (err) => {
//     console.log("firse padhli");
//     console.log(error);
//   }
// );
const data = fs.readFile("read.txt", "utf8", (err, data) => {
  console.log(data);
  console.log(error);
});
