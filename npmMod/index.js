// import chalk from "chalk";

// console.log(chalk.blue("Hello world!"));
import chalk from "chalk";
// const validator = require("validator");
import validator from "validator";
console.log(chalk.red.underline.inverse("false"));
// const res = validator.isEmail("nikhil@nikhilco.m");
const res = validator.isEmail("nikhil@nikhilco.m");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
