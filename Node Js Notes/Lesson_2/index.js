// 🚀🚀 Let's now explore some of the built-in modules in Node.js --> --> --> -->
// 🚀🚀 The very first built-in module which we gonna explore is "file module", using this module we can do several operation on the file system like --> creating a new file, adding some content in a file, accessing and reading the content of a file, deleting a file, over-writting or changing the file content and many more things we can do using this built-in module of Node.js -->
// 🚀🚀 To know more or to explore more you can visit to the given site : --> --> https://nodejs.org/api/fs.html

// 🚀🚀 we gonna see the below methods of the file module system : --> -->
// 🚀 writeFile(), appndFile(), readFile(), rename(), unlink(), exists()

// 🚀 so to use this file module first we need to import that module, let's see how to do that -->
const fs = require("fs"); // file module system is imported
// console.log(fs);

// 🚀🚀 to create a file and to add some demo content we can use the below function : -->
// fs.writeFile("demo1.txt", "demo text \n", (error) =>
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`your file got created successfully`);
//   }
// });

// 🚀 here in this case we have to remember that this function will create a new file with the given name and will add the given content to that file, but if that file is already there in our system or if that file already exists in our system then it will not create a new file with the given name, instead it will over-write the content of that file with the given one.
// 🚀 but if we want to add some content to an existing file instead of over-writing the content of that file then we can use the below method from the node js file module --> -->
// fs.appendFile("demo1.txt", "some text added", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`your content got added successfully`);
//   }
// });

// 🚀🚀 Now let's see how to read the content of a file -->
// fs.readFile("./demo1.txt", (error, data) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log(`successfull`);
//     console.log(data);
//   }
// });
// to solve the buffer data issue either we can use data.toString() or we can pass a second parameter "utf-8"

// 🚀🚀 Now let's see how to rename a file --> -->
// fs.rename("demo1.txt", "demo2.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`file renamed successfully`);
//   }
// });

// 🚀🚀 Now let's see how to delete a file --> -->
// fs.unlink("demo1.txt", (error) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log(`Your file is deleted successfully`);
//   }
// });

// 🚀🚀 Now let's see how to find out wheather a file exists in our system or not?? --> -->
// fs.exists("demo2.txt", (result) => {
//   if (result) {
//     console.log(`found the file`);
//   } else {
//     console.log(`unfortunaly the file you are looking for does not exist`);
//   }
// });
