// 🚀 Array is a JavaScript Datatypes, which  help us to save multiple kind of datas in a single container.

// Let's now the most important array methods one by one ->

// 🚀🚀 toString() ->
// this array method converts all the data to "string data type" which are there insed that array container. Let's see an example ->

// let myArray = [1, 2, 3, 4, 5, 6, 7]
// let numberData = myArray
// console.log(numberData[0],typeof numberData[0])
// let stringData = myArray.toString()
// console.log(stringData[0],typeof stringData[0])


// 🚀🚀 join() ->
// this array method will join all the data which are there inside that array with the given string value while using this method, and will form a single sentence. Let's see an example ->

// let myArray = ["Anish", "Mike", 12, "Derek", 20]
// let data = myArray.join(" and ")
// console.log(data, myArray)


// 🚀🚀 concat() ->
// this array method will combine together all the different arrays which are present in that JavaScript file and will return a single array. Let's see an example ->

// let name = ['name'];
// let age = [27];
// let proffesion = ["web developer"];
// let city = ["Kolkata"]
// let meaningfulSentence = name.concat(age, proffesion, city)
// console.log(meaningfulSentence)


// 🚀🚀 splice() ->
// this array method is used to remove an element from an array, we also need to keep in mind that this method will mutate the original array and will create a new array. Let's see an example ->
// syntax => array.splice("index no from where you want to start deleting item", "no of items that you want to delete")

// let myArray=["Harry", "Taniya", "Sonu", "John"]
// let newArray = myArray.splice(1,2)
// console.log(myArray, newArray)

// 🚀 we can also put new data inside that array, in which we are using the splice method and deleting some item, Let's see an example ->
// let myArray=["Harry", "Taniya", "Sonu", "John"]
// let newArray = myArray.splice(1,2, "Melica", "Stilinski")
// console.log(myArray, newArray)


// 🚀🚀 slice() ->
// this array method cuts out the items from an array data.
// syntax => 1) array.slice("index no from where you want to cut the item or take the slice out", "index no upto which you want to cut, but will not include that"), 2) if we will use positive no for the second value then it will cut the items from left to right or from start to end otherwise if we will use negative no as the second value then the items will be cut out from right to left or from end to start. Let's see an exaple of this array method ->


// let myArray = ["Alina", "Mike","Derek", "Scott", "Stiles"]
// let data = myArray.slice(1,3)
// console.log(myArray, data)
// let myArray_2 = ["Alina", "Mike","Derek", "Scott", "Stiles"]
// let data_2 = myArray.slice(1, -2)
// console.log(myArray_2, data_2)


// 🚀🚀 indexOf() & lastIndexOf() ->
// this arrray method helps us to find out the index no of a particular data of an array. But we have to remember that if we have that same data twice in that same array then the index no of the very first data willl be given out as the result, as this array method will start finding the index no of the asked data, from left to right or from start to end, and not from right to left or from end to start. Let's see an example how these methods work ->

// let myArray = ["Anil", "Rajesh", "Alina", "Riya", "Tina", "Peter","Tina", "Alison"]
// console.log(myArray.indexOf("Tina"))
// console.log(myArray.lastIndexOf("Tina"))


// 🚀🚀 flat() ->
// if we have an nested array inside an array then this method will help us to bring that nested array out of that nested situation and put it inside that outer layer array and make the whole thing a single array. Let's see an example below ->

// let myArray = [1, 2, 54, 3, 35, 3.5, ["Alina", "Rohit", 32, 19], 30, "Binod"]
// let data = myArray.flat()
// console.log(myArray, data)

// => Let's see an an another example ->
// let myArray_2 = [1, 4, "Peter", 5, "Saikat", ["Riya", 34, "Ducaleon", ["Sumit", 15], "Derek", 90], 100, "Alison"]
// let data_2 = myArray_2.flat(2)
// console.log(myArray_2, data_2)


// 🚀🚀 push() ->
// when we want to add some data inside an array then we need to use thid method. We also need to remember that this method mutates the original array and inject the new given datas inside the original array only and that also at the end of the original data. Let's see an example ->

// let myArray = ["Peter", "Stiles", "Melica", "Scott"]
// myArray.push("Lydia", "Jashon")
// console.log(myArray)


// 🚀🚀 unshift() ->
// this method is used to insert one or more data at the starting to an array. We also need to remember that this method mutates the original array. Let's see an example ->

// let myArray = ["Peter", "Stiles", "Melica", "Scott"]
// myArray.unshift("Lydia", "Kiara")
// console.log(myArray)


// 🚀🚀 pop() ->
// this method removes the last item from the list of items which are there inside the array, to which we are using this method. We also need to remember that this method mutate the original array as well. Let's see an example ->

// let myArray = ["Peter", "Stiles", "Melica", "Scott"]
// myArray.pop()
// console.log(myArray)

// if we do have nested array as the last elment of an array then using this pop() method we can also return that last elements. Let's see an example ->

// let myArray = ["Peter", "Stiles", "Melica", "Scott", [10, 20, "Lydia"]]
// let popData = myArray.pop()
// console.log(myArray, popData)


// 🚀🚀 shift() ->
// this method removes the first element element of an array and returns that first element. We also need to remember that this method also mutates the original array. Let's see an example ->

// let myArray = ["Peter", "Stiles", "Melica", "Scott"]
// let data = myArray.shift()
// console.log(myArray, data)


// 🚀🚀 reverse() ->
// we can reverse the order of the items of an array using this method. We need to remember that this method mutates the original array. Let's see an example ->

// let myArray = ["Peter", "Stiles", "Melica", "Scott"]
// myArray.reverse()
// console.log(myArray)


// 🚀🚀 fill() ->
// if we want to manipulate the data of an array and want to replace the data with our required data then we will use this method. We need to remember that this method mutates the original array. This method will thake three parameters, among which the first one will be the value or data whcih we want to insert inside the array, the second one will be the starting index no. means after which element we want to insert the data and the last one will be the ending index no means which one will be the immediate next item of the last item of our inserted data(The second and the third value are optional, like if we will not mention the second parameter or starting index no then by default the first item of the original array will be considered and likewise if we will not mention the third parameter or the end index no, then the last element of the original array will be considered). Let's see an example ->

// let myArray = ["Peter", "Stiles", "Melica", "Scott","Derek"]
// myArray.fill("Lydia",1,3)
// // we can also give negative no as parameter
// console.log(myArray)


// 🚀 Now let's see some array methods which are a higher order function.
// 🚀🚀 forEach() ->
// syntax =>
// array.forEach(callBackFunction(parameter){
//   this parameter will iterate through all the data of that array and will return that same data, each time it will iterate through that array, and then it's upto us whether if we want to perform any certain task using that data, then we can do that for sure.
// })
// Now let's see an example below ->

// let myArray = [10, 12, 3, 25, 20]
// myArray.forEach((data) => {
//     console.log(data);

//     // Now let's do some operation using this data ->

//     console.log("This is the result of multiplication of the above no: ", data * 2)
// })


// 🚀🚀 map() ->
// this array method works same as forEach method but the only difference is it returns a new array each time it will iterate through that array, to which we are using this map method. It doesn't mutate the original array. Let's see an example how this method works ->

// let myArray = [10, 2, 30, 4, 6, 12]
// let newArray = myArray.map((data) => {
//     return data * 2
// })
// console.log(myArray, newArray)


// 🚀🚀 filter() ->
// this array method helps to filter out certain things based on our required condition and it returns a new array without mutating the original one. Let's see how we can use this filter method ->

// let posts = [{
//     name: "Alison",
//     gender: "female"
// }, {
//     name: "Melica",
//     gender: "female"
// }, {
//     name: "Scott",
//     gender: "Male"
// }, {
//     name: "Lydia",
//     gender: "female"
// }, {
//     name: "Derek",
//     gender: "Male"
// }]
// let filteredData = posts.filter((data) => {
//   return  data.gender != "female"
// })
// console.log(posts,filteredData)


// 🚀🚀 reduce() ->
// this array method will iterate through the array, to which we are using this method, and will take the first item as a reference and then will do what we will ask for with the second item and the result will then become the reference and again will do the same operation with the third item and then that result will become the reference and then will again do the same operation with the fourth item and so on... Let's see an example of this method and how we can use this according to our requirement ->

// let myArray = [1,2,10,8,5,20,3,15]
// let findMaxNo= myArray.reduce((a,b)=>{
//     return Math.max(a,b)
// })
// console.log(findMaxNo)


// 🚀🚀 some() & every() ->
// this method is used if we want to check that some of the data of an array fullfills our given condition or not.    Let's see an example ->

// let myArray = [3,10,2, 5,15,12]
// let isGreaterThan = myArray.some((data)=>{
//  return data>10
// })
// console.log(isGreaterThan)

// 🚀 every()method also kind of similar to the above method, but we need to remember that rhis method will make sure whether all the data of an array is fullfilling our given criteria or not. Let's see an example ->

// let myArray = [3,10,2, 5,15,12]
// let isGreaterThan = myArray.every((data)=>{
//  return data>10
// })
// console.log(isGreaterThan)


// 🚀🚀 find() & findIndex() ->
// this array method is used to find a certain value from an array. We also need to remeber that if we will have the same data more than once, then this method will return the very first data that will fullfill our given condition. Let's see how to use this method ->

// let data =[{
//     name:"Derek",
//     id:101
// },{
//     name:"Alina",
//     id:104
// },{
//     name:"Peter",
//     id:106
// },{
//     name:"Lydia",
//     id:304
// },{
//     name:"Stiles",
//     id:206
// }]
// let find = data.find((info)=>{
//     return info.id === 304
// })
// console.log(find)

// 🚀 findIndex()method also works similarly to find() method but the only difference is find() method will return the whole data which will match with our given condition and that also will be the very first one in the item list, and findIndex() method will return the index no of the very first data which will match our given criteria. Let's see an example ->

// let data =[{
//     name:"Derek",
//     id:101
// },{
//     name:"Alina",
//     id:104
// },{
//     name:"Peter",
//     id:106
// },{
//     name:"Lydia",
//     id:304
// },{
//     name:"Stiles",
//     id:206
// }]
// let findIndex = data.findIndex((info)=>{
//     return info.id === 304
// })
// console.log(findIndex)


// 🚀🚀 sort() ->
// this array method will sort the data alphabatically if the data are in string format and if the list of the items of an array are single digit only then this method will sort the number in increasing order. But we need to remember that for the case of string data only the starting letter will be considered. let's see an example ->

// let myArray = ["Peter", "Derek", "Lydia", "Stiles", "Alison"]
// let myArray_2 = [2, 5, 9, 7, 3, 6]
// console.log(myArray.sort(), myArray_2.sort())