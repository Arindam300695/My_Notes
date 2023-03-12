// 🚀🚀 In this lesson we are gonna explore os and path module of Node Js. --> -->

// 🚀🚀 Now first explore os module --> -->
const os = require("os");
// console.log(os);

// console.log(os.userInfo());  // To get the user info of the system
// console.log(os.homedir()); // to get the information about the home directory
// console.log(os.hostname());  // to get the information about the host name
// console.log(os.totalmem());  // to get the information about the total memory of the system
// console.log(os.freemem()); // to get the information about the available or free memory of the system

//  🚀🚀 some of the important things which we gonna use later on a lot
// console.log(__dirname); // gives the  of the current directory
// console.log(__filename); // gives the info of the current file path

// 🚀🚀 Now let's explore path module --> -->
const path = require("path");
// console.log(path);

// const extensionName = path.extname("index.js"); // helps to know the extion of a file
// console.log(extensionName);
// const joinNameForward = path.join(__dirname + "/about");
// const joinNameBackward = path.join(__dirname + "/.." + "/about");
// console.log(joinNameForward, "\n", joinNameBackward);
