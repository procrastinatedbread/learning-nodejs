const fs = require("fs");

// fs.mkdir("nikhil", (err) => {
//   console.log("Folder created");
// });
// fs.writeFile("bio.txt", "mahine bithar ban ja gi teri solid body re", (err) => {
//   console.log("File created");
// });
// fs.appendFile(
//   "bio.txt",
//   " halwe halwe chaale gi yo pyar ki gaadi re",
//   (err) => {
//     console.log("File appended");
//   }
// );
// fs.rename("bio.txt", "myBio.txt", (err) => {
//   console.log("Rename done");
// });
// fs.unlink("myBio.txt", (err) => {
//   console.log("File Deleted");
// });
fs.rmdir("nikhil", (err) => {
  console.log("Folder deleted");
});
