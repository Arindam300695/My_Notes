// 🚀🚀 Now let's explore the most important module of Node Js, which is Http Module --> -->
// 🚀🚀 one of the most important reason of using http module is to create a server which is our main moto to learn Node Js, let's now see how to create a server using this http module --> -->
const http = require("http");
const port = 4000;
const fs = require("fs");
const path = require("path");

// let myServer = http.createServer((req, res) => {
//   console.log(req.url);  // get the info about the requested url
//   res.end(`Hello, I am your first server`);
// }); // http://localhost:4000/  //"send a response and end a session"
// myServer.listen(port, () => {
//   console.log(`I am listening at port no ${port}`);
// });

// 🚀🚀 Now let's see how to do routing in Node Js using http module --> -->
// let myServer = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end(`Hello, I am your hoem page`);
//   } else if (req.url === "/about") {
//     res.end(`Hello, I am your about page`);
//   } else if (req.url === "/contact") {
//     res.end(`Hello, I am your contactUs page`);
//   } else {
// res.writeHead(404, {"Content-type":"text/html"}); // to set the status code and the document type
//     res.end(`Oops, Error 404 page not found`);
//   }
// }); // http://localhost:4000/
// myServer.listen(port, () => {
//   console.log(`I am listening at port no ${port}`);
// });

// 🚀🚀 we need to remember that the proper status code should be shown, while sending a response to the client. respose range (100-199) indicates informational responses, response range (200-299) indicates successful responses, response range (300-399) indicates redirections, response range (400-499) indicates clients errors and response range (500-599) indicates server errors.
// 🚀🚀 But in the above example though we are sending the error response, the status code we can see on the screen as 200, so the better practice is to mention the status code, let's see how to do that --> -->
// so we need to send the response status using res.writeHead()

// 🚀🚀 there are mainly 4 types of request methods like --> --> get(), post(), put(), delete() which is almost similar to CRUD method --> -->
//  Create ==> ==> post()
// Read ==> ==> get()
// Update ==> ==> put()
// Delete ==> ==> delete()

// 🚀🚀 here we are gonna see the external module, the first external module whcih we are gonna use now is nodemon, and we can install this module using the following command --> -->
// first we have to initialize npm(node package manager) using the command --> --> npm init -y
// then we are gonna install nodemon which is an external module, to install this module we need to use the following command --> --> npm i nodemon

// let's now see some of the important concept regarding JSON --> -->
const information = {
  employeeName: "Derek Hale",
  employeeId: 1001,
  employeeWorkingField: "Full Stack Developer",
};
// to convert the above object into json we will use JSON.stringify("myObjectName")
const jsonData = JSON.stringify(information); // converted the object into JSON format
// console.log("json format ->", jsonData);

// to convert the json data into object we will use JSON.parse("myJSONDataName")
// const objectData = JSON.parse(jsonData);
// console.log("object format ->", objectData);

// 🚀🚀 Now we will see how to serve a JSON file as a response --> -->

// adding the json data to the data.json file --> -->
// fs.writeFile("data.json", jsonData, (error) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log(`Content added successfully`);
//   }
// });

// creating a server and serving the JSON data to that server -->
// const myServer = http.createServer((req, res) => {
//   if (req.url === "/") {
//     console.log(req.url);
//     res.writeHead(200, { "Content-type": "text/html" });
//     res.end(`<h3>Hello from the home page</h3>`);
//   } else if (req.url === "/userData") {
//     console.log(req.url);
//     res.writeHead(200, { "Content-type": "application.json" });
//     fs.readFile(path.join(__dirname, "./data.json"), "utf-8", (error, data) => {
//       if (error) {
//         throw error;
//       } else {
//         res.end(`Here is your data: \n\n${data}`);
//       }
//     });
//   } else {
//     console.log(req.url);
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.end(`<h3>Oops, error404 page not found! </h3>`);
//   }
// }); // http://localhost:4000/

// listening confirmation of the server
// myServer.listen(port, (error) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log(`Your server is listening at the port no ${port}`);
//     // console.log(path.join(__dirname, "./", "data.json"))
//   }
// });
