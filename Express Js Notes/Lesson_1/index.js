// 🚀🚀 Let's see how to create server in Express Js --> -->
// First we have to import express as it's an external module of Node Js, we can do that using the following command --> -->    npm i express
// and we are gonna install nodemon package as well using the command --> -->       npm i nodemon

require("dotenv").config();
const express = require("express"); // required express module
const app = express(); // express app created
const PORT = process.env.PORT; //  port no;
const path = require("path");

app.listen(PORT, (error) => {
  // creating server
  if (error) { 
    throw error;
  } else {
    console.log(`Your server is listening on http://localhost:${PORT}`);
    // console.log(
    //   path.resolve(__dirname, "../../Node Js Notes/Lesson_4/data.json")
    // );
  }
});
//localhost:5000/

// app.get("/", (req, res) => {
//   res.send("Hello from home page");
// });

// app.post("/", (req, res) => {
//   res.send("Hello, I am post request");
// });

// app.put("/", (req, res) => {
//   res.send("Hello, I am put request");
// });

// app.delete("/", (req, res) => {
//   res.send("Hello, I am delete request");
// });

// 🚀🚀 Let's now see how to send different kind of responses on get request --> -->

// 🚀 sending html as response with basic routing --> -->
// app.get("/", (req, res) => {
//   // console.log(req.url); // getting the requested url
//   res.send(`<h1>Hello, I am home page</h1>`);
// });

// app.get("/about", (req, res) => {
//   // console.log(req.url); // // getting the requested url
//   res.send(`<h2>Hello, I am about page</h2>`);
// });

// 🚀 sending html file as response with basic routing --> -->
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

// app.get("/about", (req, res) => {
//   res.sendFile(__dirname + "/views/about.html");
// });

// 🚀 sending JSON data as response --> -->
// app.get("/user", (req, res) => {
// res.statusCode = 202;
//   res.send({
//     name: "Stiles",
//     id: 1001,
//     lang: "Node Js",
//     null: null,
//   });
// });

// app.get("/user", (req, res) => {
//   // res.status(200);
//   res.statusCode = 202;
//   res.json({
//     name: "Stiles",
//     id: 1001,
//     lang: "Node Js",
//   });
// });

// the difference between res.send and res.json is res.send cannot convert non-object data types to json format but res.json converts each and every data types to json format.

// app.get("/user", (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, "../../Node Js Notes/Lesson_4/data.json")
//   );
// });

// 🚀 showing error 404 page --> -->
// app.get("*", (req, res) => {
//   res
//     .status(404)
//     .send(
//       `<h1 style="background-color:black;color:white">Error 404 page not found</h1>`
//     );
// });

// 🚀🚀 Let's now see how to serve a static website as a response --> -->
// for that we have to use express middleware, let's see how to use express middleware in order to serve a static file as response --> -->

// app.use("/", express.static("Static Website"));
// app.get("*", (req, res) => {
//   res
//     .status(404)
//     .send(
//       `<h1 style="background-color:black;color:white">Error 404 page not found</h1>`
//     );
// });

// 🚀🚀 Let's now see how to allow users a downloadable resource or file or let's say how to serve a downloadable resource as response --> -->

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../Lesson_1/views/index.html"));
// });

// app.get("/download", (req, res) => {
//   res.download(path.resolve(__dirname, "../Lesson_1/views/images/newYear.png"));
// });

// app.get("*", (req, res) => {
//   res.redirect("/download");
// });

// 🚀🚀 Let's now see how to get value from req parameters --> -->

// app.get("/profile/name/:name/city/:cityName/age/:age", (req, res) => {
//   console.log(req.params);
//   res.send(
//     `Name is ${req.params.name}, City is ${req.params.cityName} and Age is ${req.params.age}`
//   );
// });

// 🚀🚀 Let's now explore how to get value from req query parameters --> -->

// app.get(`/profile`, (req, res) => {
//   console.log(req.query);
//   res.send(`Name is ${req.query.name} and age is ${req.query.age}`);
// });

// Let's now see how to handle JSON data with post request method --> -->
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

// app.post("/user", (req, res) => {
//   res.send(`Name is ${req.body.name} and age is ${req.body.age}`);
// });

// 🚀🚀 Let's now see how to send data with the help of an html form and handle that data with post request --> -->

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send(`<h2 align="center">Hello, Welcome to my world</h2>`);
// });
// app.get("/userRegistration", (req, res) => {
//   res.sendFile(__dirname + "/form.html");
// });
// app.post("/userRegistration", (req, res) => {
//   res.send(
//     `your name is ${req.body.fullName}, age is ${req.body.age}, email is ${req.body.email} and contact no is ${req.body.contact}`
//   );
// });

// let regex = /^([0-9]{3})$/;
// let char = 5654;
// console.log(regex.test(char));

// 🚀🚀 Let's now see how we can apply validation to the form and can restrict user from sending any unwanted data format, using one of the famous concept of JavaScript, which is Regular Expression --> -->

// app.use(bodyParser.urlencoded());
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/rgxForm.html");
// });
// app.post("/userData", (req, res) => {
//   let idRegex = /^[^0][0-9]{2}$/;  // according to this condition id should be of 3 digits only and should not start with 0;
//   let contactRegex = /^[^0][0-9]{9}$/;  // according to this condition contact no should be of 10 digits only and should not start with 0;
//   let { id, title, contact } = req.body;
//   if (idRegex.test(id) && contactRegex.test(contact)) {
//     res.send(`hi`);
//   } else {
//     res.redirect("/");
//   }
//   console.log(id, title, contact);
//   console.log(idRegex.test(id), contactRegex.test(contact));
// });

// 🚀🚀 Let's now see what is .env file and how to set environment in Express Js based on our requirements --> -->
// 🚀 What is .env file? --> full form of .env file is environment file. It's a kind of secret or hidden file which only the developer can access.
// 🚀 Why do we need .env file? --> --> To store private environment variables like the data which we need for the development purposes but we dont want to share with otehrs (like--> --> database url, port on which our server is running, API keys etc). At the time of uploading our project on gitlab or heroku we can use this .env file to hide the desired data.
// 🚀 Let's now see how to use .env file?
// Step_1 --> --> need to create an .env file at the root directory
// Step_2 --> --> we need to take care of naming the .env variables, we always need to use uppercase at the time of naming the .env variables, if the .env variable does have more than one words then we can use underscore. Like --> PORT, DATABASE_URL etc.
// Step_3 --> --> at the time of assigning the values to the variables we need to keep in mind that whether the value is a number or a charecter, we can't use double quote.
// Step_4 --> --> If we want to create any commnet in an .env file then we can use "#" sign.
// Step_5 --> --> need to install dotenv package using the command --> --> npm install dotenv
// Step_6 --> --> in order to use dotenv we need to require it also using the command --> --> require("dotenv").config()
// Step_7 --> --> access the env variables from anywhere using process.env.variabelName
//  optional --> --> can install dotenv extension in order to get nice syntax highlighting.

// 🚀🚀 Middleware Concept in Express Js --> -->

// 🚀 app level middleware
// const homeMiddleware = (req, res, next) => {
//   console.log(`I am home middleware`);
//   next();
// };
// const aboutMiddleware = (req, res, next) => {
//   console.log(`I am about middleware`);
//   next();
// };
// const contacttMiddleware = (req, res, next) => {
//   console.log(`I am contact middleware`);
//   next();
// };
// // app.use("/", homeMiddleware);
// app.use("/about", aboutMiddleware);
// app.use("/contact", contacttMiddleware);
// app.get("/", (req, res) => {
//   res.send(`Welcome to home page`);
// });
// app.get("/about", (req, res) => {
//   res.send(`Welcome to about page`);
// });
// app.get("/contact", (req, res) => {
//   res.send(`Welcome to contact page`);
// });

// 🚀 router level middleware --> --> -->
// const router = express.Router();
// const logger = (req, res, next) => {
//   console.log(
//     `I am logger and I will be logged whenever ${req.url} will be visited`
//   );
//   next();
// };
// app.get("/", (req, res) => {
//   res.send(`Welcome to home page`);
// });
// app.get("/profile", (req, res) => {
//   res.send(`Welcome to profile page`);
// });
// router.use(logger);
// router.get("/about", (req, res) => {
//   res.send(`Welcome to about page`);
// });
// router.get("/contact", (req, res) => {
//   res.send(`Welcome to contact page`);
// });
// router.get("/user", (req, res) => {
//   res.send(`Welcome to user page`);
// });
// app.use(router);
// app.use((req, res) => {
//   res.json({
//     message: `OOPs!! requested route not found`,
//   });
// });

// 🚀 Let's explore more by going through some practical examples --> -->
// I want to create 2 middlewares, one will be ageChecking middleware and the other will be id checking middleware, where at first the id checking middleware will check the user's id and will go through our given condition and will decide whether to let the user enter to the age checking criteria related site or not and then if the user's enter to the age checking criteria site then the age checking middleware will check the user's age from user's input and will go through our given condition and if the user will fullfill the given criteria then only he or she can have the access to our premium content --> --> --> -->

// app.use(bodyParser.urlencoded());

// // id checking middleware
// const idCheckingMiddleware = (req, res, next) => {
//   let id = req.body.id;
//   let idRegex = /^[^0][0-9]{2}$/;
//   let result = idRegex.test(id);
//   if (result) {
//     res.redirect("/ageChecker");
//   } else {
//     res.redirect("/idChecker");
//   }
// };

// // age checking middleware
// const ageCheckingMiddleware = (req, res, next) => {
//   let age = req.body.age;
//   if (age >= 18) {
//     res.redirect("/content");
//   } else {
//     res.redirect("/ageChecker");
//   }
// };

// // taking id data from user's input
// app.post("/idVerifier", idCheckingMiddleware);

// // taking age data from user's input
// app.post("/ageVerifier", ageCheckingMiddleware);

// // home page
// app.get("/", (req, res) => {
//   res.send(`<div>
//   <h2>Welcome to our home page</h2>
//   <a href="/idChecker"/> Click here to verify ur id
//   </div>`);
// });

// // id checking page
// app.get("/idChecker", (req, res) => {
//   res.send(`<div>
//   <form action="/idVerifier" method="post">
//   <input type="text" name="id" placeholder="Enter Your ID" style="text-align:center;"/>
//   <button type="submit">Submit ID</button>
//   </form>
//   </div>`);
// });

// // age checking page
// app.get("/ageChecker", (req, res) => {
//   res.send(`<div>
//   <form action="/ageVerifier" method="post">
//   <input type="text" name="age" placeholder="Enter Your age" style="text-align:center;"/>
//   <button type="submit">Submit age</button>
//   </form>
//   </div>`);
// });

// // premium content page
// app.get("/content", (req, res) => {
//   res.send(`Welcome to our premium content page`);
// });

// 🚀🚀 Let's now learn about the template engine in Express Js --> -->
// 🚀 we are going to learn about ejs(Embeded JavaScript) which is one of the most popular template engine in Express Js--> --> -->
// 🚀 template engine is used to render dynamic data from server to our website -->
// first we have to install ejs using the commmand --> npm install ejs
// then we have to create a folder named as "views" and need to create a file with the extension .ejs
// we can pass the data using the function res.renser("fileName", {data in object format})

// app.set("view engine", "pug");
// app.set("views", "./view_engine");
// app.use(express.urlencoded());
// let data = [];
// app.get("/", (req, res) => {
//   res.render("home", { data });
// });
// app.post("/", (req, res) => {
//   console.log(req.body.products);
//   let products = req.body.products;
//   data.push(products);
//   console.log(data);
//   res.redirect("/");
// });

// 🚀🚀 Let's now learn about mongodb and let's perform a small CURD operation with mongodb -->
// 🚀 what is mongodb?
// --> --> it was released on 11 February 2009, it is basically a nosql database. Which means, it is not required to use structured query language in mongodb. Let's see the basic differences between sql and mongodb ==> 1. sql is a RDBMS(relational database management system) and works on relational database whereas mongodb is a non-relational database and it's document oriented database management system and works on document-based database model. 2.sql stores data as a form of table whereas mongodb stores data as  a form of documents mainly in BSON (https://www.mongodb.com/json-and-bson) (https://www.educba.com/json-vs-bson/) format. 3. sql uses structured query language whereas mongodb uses BSON(kind of similar to JSON, full form is Binary JSON). 4. table format in sql is known as table, row and column whereas in mongodb it's known as collection, documents and fields.
// 5. Table in sql is known as collection in mongodb, row in sql is known as documents in mongodb and column in  sql is known as fields in mongodb. which means collection of fields is known as documents and collection of documents is known as collection in mongodb whereas collection of rows and columns is known as table in sql.
// 🚀🚀 Let's now learn how to install mongodb --> -->
// go to google and search for mongodb download
// then simply use it like any other software
// copy the data directory and log directory and keep it somewhere
// now go to c drive and then click on program files, go to mongodb and then go to server and after that go to "bin" folder and there you will find mongo.exe and mongod.exe
// then open cmd and check the mongodb database version just by pasting the data directory and adding "/mongod.exe" --version and check the mongodb shell version just by pasting the same data as before and adding "/mongo.exe" --version.
// run the mongodb shell using the command --> --> again pasting the same data as before and adding "/mongo.exe" and then you will see a ">" sign in your cmd and that means the mongodb shell has been started. and the default port no is -->27017
// try commmand "show dbs" to check the database that are present in your database
// some shortcut settings to open mongo shell faster --> go to your desktop and right click on this pc, go to properties, go to advanced system settings, go to environment svariables, click on path shown in the very first section, click on edit, click on new and paste the path which we used in cmd to start mongodb shell, then click on ok how many times it will ask you. It's done.
// now let's first clear the fundamentals of mongodb like how to create db, how to show db, how to create collection, etc
// we have previously seen that "show dbs" command show us the already presented database.
// "use myDbName" will create the db if it's not present and will switch to this db and if that db was already present in then it will simply switch to that db.
// the database you have created, you need to add atleast one collection and then only that database will be shown to you otherwise it will not.
// "db.myCollectionName.insertOne({add one collection of any no of fields in key:value format})" this command will first create one collection with the given name and then will insert that collection with only one document to your database and "insertmany({})" will create any no of documents with any no of fields that you want.
// "db" command will show your current or active database and "show collections" will show you your list of collections.
// "db.myCollectionName.find()" command will show you your list of documents. you can add ".pretty()" at last of this command in order to prettify the shown data format.  we can pass query inside find to filter our result of documents according to our requirement. query is just a condition which will be in "key:value" pair and we need to remember that this thing is case sensitive. we can pass projection inside find after query if we want to show that particular field only which we have passed as query and projection is basically also a "key:value" pair but it takes only two values 0 and 1, 0 will show all the remaining fields but not the query and 1 will show only the query field but not the rest ones. the id will be by default attached to these results.
//  If we want to remove the id part from the above result then we need to use the command --> --> adding _id:0 with query.
// If the searched query field is present in more than one document and we want to show only one document then we can add limit(1), to limit the no of searched document and this will show the very first matched data and we can pass the no as per our reuirement depending upon how much documents we want to show. we can add skip(1) method with it if we want to skip the first result and wanna show the second matched document and we can change the no inside skip based on how many documents we want to skip.
// we can also use findone() method and if we are using this method then we need not use limit() method.
// "db.myCollectionName.updateOne( {filter}, {$set: {updated data}} )" will update one field at a time. and updateMany() method will update multiple fields. this set operator will update the existing field value with the given one.
// "db.myCollectionName.deleteMany({filter})" this command will delete the document based on our given condition which we have passed as "key:value" format in filter section. and if we will leave that part completely empty then the whole collection will be deleted.
// we can  use mongodb compass which is a GUI for mongodb using which we can very easily perform CRUD operation without using or remembering thode boring set of mongo shell commands.
// "db.dropDatabase()" will delete the database but before that make sure to crosscheck the database using "db" command.

// 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
// All MongoDb commands you will ever need (MongoDb Cheatsheet)
// In this post, we will see a comprehensive list of all the MongoDB commands you will ever need as a MongoDB beginner. This list covers almost all the most used commands in MongoDB.
// I will assume that you are working inside a collection named 'comments' on a MongoDB database of your choice

// 🚀🚀 1. Database Commands
// View all databases
// show dbs

// 🚀 Create a new or switch databases
// use dbName

// 🚀 View current Database
// db

// 🚀 Delete Database
// db.dropDatabase()

// 🚀🚀 2. Collection Commands
// Show Collections
// show collections

// 🚀 Create a collection named 'comments'
// db.createCollection('comments')

// 🚀 Drop a collection named 'comments'
// db.comments.drop()

// 🚀🚀 3. Row(Document) Commands
// Show all Rows in a Collection
// db.comments.find()

// 🚀 Show all Rows in a Collection (Prettified)
// db.comments.find().pretty()

// 🚀 Find the first row matching the object
// db.comments.findOne({name: 'Harry'})

// 🚀 Insert One Row
// db.comments.insert({
//     'name': 'Harry',
//     'lang': 'JavaScript',
//     'member_since': 5
//  })

// 🚀 Insert many Rows
// db.comments.insertMany([{
//     'name': 'Harry',
//     'lang': 'JavaScript',
//     'member_since': 5
//     },
//     {'name': 'Rohan',
//     'lang': 'Python',
//     'member_since': 3
//     },
//     {'name': 'Lovish',
//     'lang': 'Java',
//     'member_since': 4
// }])

// 🚀 Search in a MongoDb Database
// db.comments.find({lang:'Python'})

// 🚀 Limit the number of rows in output
// db.comments.find().limit(2)

// 🚀 Sort the number of rows in output in asscending order
// db.comments.sort({member_since:1}).pretty()

// 🚀 Sort the number of rows in output in decending order
// db.comments.sort({member_since:-1}).pretty()

// 🚀 Count the number of rows in the output
// db.comments.find().count()

// 🚀 Update a row
// db.comments.update({name: 'Shubham'},
// {$set: {'name': 'Harry',
//     'lang': 'JavaScript',
//     'member_since': 51
// }}, {upsert: true})

// 🚀 Mongodb Increment Operator
// db.comments.update({name: 'Rohan'},
// {$inc:{
//     member_since: 2
// }})

// 🚀 Mongodb Rename Operator
// db.comments.update({name: 'Rohan'},
// {$rename:{
//     member_since: 'member'
// }})

// 🚀 Delete Row
// db.comments.remove({name: 'Harry'})

// 🚀 Less than/Greater than/ Less than or Eq/Greater than or Eq
// db.comments.find({member_since: {$lt: 90}})
// db.comments.find({member_since: {$lte: 90}})
// db.comments.find({member_since: {$gt: 90}})
// db.comments.find({member_since: {$gte: 90}})
