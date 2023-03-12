// 🚀🚀 Now let's explore url Module --> -->
const url = require("url");
// console.log(url);

const demoUrl = `http://localhost:8080/default.htm?year=2017&month=february`;

const parseResult = url.parse(demoUrl, true);
// console.log("Pathname: ", parseResult.pathname);
// console.log("Query: ", parseResult.query);
// console.log("Search: ", parseResult.search);
// console.log("Port: ", parseResult.port);
// console.log("Hostname: ", parseResult.hostname);
// console.log("Host: ", parseResult.host);
// console.log("href: ", parseResult.href);

// Let's now see how to get more information about the query parameters --> -->
// var queryData = parseResult.query;
// console.log(queryData);
// console.log(queryData.year, queryData.month);

// We will now try to get more exposure by practicing a bit where we will now mix the concepts of fs module, http module and url module --> --> --> --> --> --> --> -->
