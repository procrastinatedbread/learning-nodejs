const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("sayMyName", () => {
//   console.log("My name is Nikhil");
// });
// event.on("sayMyName", () => {
//   console.log("My name is Nikhil Chhabra");
// });
event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and page is ${msg}`);
});

event.emit("checkPage", 200, "ok");
