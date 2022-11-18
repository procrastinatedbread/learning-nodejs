const fs = require("fs");
fs.writeFileSync("read.txt", "helooooooooooooo");
fs.writeFileSync("read.txt", "how are you?");
fs.appendFileSync("read.txt", "helllloooooooooooo");
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);
const org_data = buf_data.toString();
console.log(org_data);
fs.renameSync("read.txt", "readnikhil.txt");
