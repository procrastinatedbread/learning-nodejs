const fs = require("fs");

const bioData = {
  name: "Nikhil",
  age: 24,
  channel: "nahi banaya",
};
const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("done");
// });
fs.readFile("json1.json", "utf8", (err, data) => {
  //   console.log(data);
  const orgData = JSON.parse(data);
  console.log(orgData);
});
