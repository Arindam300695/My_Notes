// -------------------------> function notes ----------------------------->

// 🚀🚀 functions are a kind of JavaScript Data Types. It's a block of codes which we use in the Same JavaScrpt files as many times as we want to perform certain tasks. It helps us in preventing of repeating certian lines of codes again and again which is required and is known a good coding practice. Because we can define the code only once inside the function and whenever we want to use it we can call it multiple times and it will perform the desired tasks whenever it will be called in that JavaScript file.

// we can write functions in JavaScript in two ways mainly.

// 🚀 function declaration ->

// function greet (){
//     console.log("Hello There")
// }
// greet()

// 🚀 function expression ->

// let greetExpression = function (){console.log("Hello There, I am a function expression")}
// greetExpression()

// 🚀🚀 we also need to keep in mind about hoisting nature of JavaScript. According to this rule while defining a function by function declaration JavaScript hoisting nature will work but if we are defining a function by function expression then JavaScript hoisting nature will not work. Actually this hoisting nature tell us that we should not call a function before it's declaration and it's also not a good coding practice.

// 🚀 Sometimes we need to pass value to a function. So we can do that with the help of function parameters and arguments.

// 🚀 Below is the example of function parameters and arguments ->

// 🚀 we can also provide some default value to a function parameter so that while calling the functin if we dont pass any argument then also that fucntion will work. Otherwise we will get a big fat error which is "UNDEFINED"

// let speak = function(name="I am a defualt name"){                                  here name is parameter
//     console.log("Good day ", name)
// }

// speak("Mario")                                                here "Mario" is argument
// speak()

// in this case we need to keep in mind that we cannot use that we cannot use that parameter value outside of that function scope.

// 🚀 We also have to keep in mind that we can return something from a function as well. below is the example of a functin returning a value ->

// let returnValue = function(parameter1, parameter2){
//     return (parameter1+parameter2)
// }

// let result = returnValue(5,10)
// console.log(result)

// 🚀 We can also use this value later on in this same JavaScript file if we want and that also as many times as we want. Let's see an example ->

// let takeValue = function(takingResultAsValue){
//     console.log(10+takingResultAsValue)
// }

// takeValue(result)


//  🚀🚀 ------------>  immediately invoked function(IIFE) -------------->




// 🚀 We also need to remember that we can define a function in a new way which has been introduced in ES6. This latest way of defining a function is known as Arrow Funciton. Let's see some examples of Arrow Function ->

// let arrowFunction=()=>{
//     console.log("I am an Arrow Function")
// }
// arrowFunction()

// 🚀 This is a shorter way of defining a function. We can shorter arrow function even more. Let's see an example ->

// let printResult=(parameter1, parameter2)=>{
//     return parameter1*parameter2
// }

// let storeResult = printResult(2,5)
// console.log(storeResult)

//  🚀 We can also write the above arrow function as below ->

// let printResult=(parameter1,parameter2)=> parameter1*parameter2

// let storeResult = printResult(2,5)
// console.log(storeResult)

// let takeResult=(takingResultAsValue)=>{
//     console.log(20+takingResultAsValue)
// }
// takeResult(storeResult)

// 🚀🚀 We need to learn about CallBacks as well. When a function is passed as an arguments to another function then that function which we are passing as an argument is known as CallBack. Let's see an example of CallBack ->

// let functionOne = (parameter1, parameter2, callBackFucntion) => {
//   console.log(parameter1, parameter2);
//   let result = parameter1 + parameter2;
//   callBackFucntion(15, result);
// };

// functionOne(5, 10, function (parameter3, takingAboveResultAsValue) {
//   console.log(parameter3 + takingAboveResultAsValue);
// });

// We can also define the CallBack function as an Arrow Function.                            Let's see how to do that below ->

// functionOne(5, 10, (parameter3, takingAboveResultAsValue) => {
//   console.log(parameter3 + takingAboveResultAsValue);
// });

// 🚀🚀 So in the above example we are directly defining the CallBack Function as an Argument. But we can also define that function first and then can pass that function as an Argument which is again known as CallBack Function. Let's see how to do that below ->

// let functionTwo = (parameter3, takingAboveResultAsValue) => {
//   console.log(parameter3 + takingAboveResultAsValue);
// };
// functionOne(5, 10, functionTwo);

// 🚀🚀 "This" Keyword in Normal Function and Arrow Function. We always need to remember that "this" keyword in a function will refer to the object using which that function is called. Let's see some practicle example below ->

// 🚀 Scenario-1 :->

// var age = 25;

// function displayAge() {
//   console.log(this.age);
//   console.log(this);
// }
// displayAge();
// 🚀 Here internally the displayAge function is being called as window.displayAge(), that's why in this function "this" keyword refers to the window object.

// 🚀 Scenario 2 :->

// var myObject = {
//   age: 30,
//   displayAge: displayAge,
// };

// myObject.displayAge();

// 🚀 Scenario 3 :->

// var itsAObject = {
//   age: 30,
//   displayAge: displayAge,
//   nestedObject: {
//     age: 35,
//     displayAge: displayAge,
//   },
// };

// itsAObject.displayAge();
// 🚀 Here as displayAge function is called using itsAObject object so here "this" reffers to the itsAObject object which contains age property, displayAge method and nestedObject object.

// itsAObject.nestedObject.displayAge();
// 🚀 Here as displayAge function is called using the nestedObject object which is a nested object of the object itsAObject so here "this" refers to the nestedObject object which contains age property and displayAge method.

// 🚀So we can say that the value of "this" keyword depends on how a fucntion is called, not where the function is defined. Cause here we can see that the displayAge funtion is defined out side the itsAObject object and as well as outside the nestedObject object but still it is referring to the obect using which we are calling the displayAge funtion.

// 🚀 Scenario 4 :->
// 🚀 In Arrow Function the "this" keyword works in a bit different way or we can say that the behaviour of "this" keyword got changed when we are using "this" keyword inside an arrow function. Let's see how "this" keyword works inside an Arrow Function ->

// var person = {
//   age: 25,
//   greet1: function () {
//     console.log("coming from greet1",this.age);
//     console.log("coming from greet1",this);
//     function greet2() {
//       console.log("coming from greet2",this.age);
//       console.log("coming from greet2",this);
//     }
//     greet2();
//     // So here internally the greet2 function is being called as window.greet2(), thats why in this greet2 function "this" keyword is
//     //referring to the window object.
//   },
// };
// person.greet1();

// 🚀 But here as greet1 function is called with the help of person object that's why here "this" keyword is referring to the person object. But what will happen if we will change the greet2 function from a normal function to an arrow function? Let's see that ->

// var person = {
//   age: 25,
//   greet1: function () {
//     console.log("coming from greet1",this.age);
//     console.log("coming from greet1",this);
//     let greet2 = () => {
//       console.log("coming from greet2",this.age);
//       console.log("coming from greet2",this);
//     };
//     greet2();
//   },
// };
// person.greet1();

// 🚀🚀 We need to keep in mind that when we are using "this" keyword inside an Arrow Function, then "this" keyword will refer to the parent of that thing where that Arrow Function has beeen declared or defined. Like in the above example we can see that the greet2 is an Arrow Function and as it is defined inside greet1(which is a normal function) so here "this" in greet2 is referring to its parent function (which is greet1 here and as in greet1 function "this" keyword is referring to the person object so indirectly in greet2 Arrow Fucntion also "this" is referring to the peroson object). But in the below example as greet2 function(which is an Arrow Function) is defined inside greet1 function which is an arrow function itself and as that arrow function(greet1) is defined inside the person object so here greet2 function's "this" is referring to the parent of person object indirectly(which is window object here) ->

// var person = {
//   age: 30,
//   greet1: () => {
//     console.log("coming from greet1", this.age);
//     console.log("coming from greet1", this);
//     let greet2 = () => {
//       console.log("coming from greet2", this.age);
//       console.log("coming from greet2", this);
//     };
//     greet2();
//   },
// };
// person.greet1();


// 🚀🚀 Higher Order Fucntion ->
// 🚀🚀 If a function is taking another fucntion as a parameter or returning another function or doing both then that function is called Higher Order Function. Let's see an example ->

// function test(a,b){
//     return (a + b)
// }

// function higherOrderFucntion(test){
//     let result = test(5,10);
//    console.log(result);
// }
// higherOrderFucntion(test)


// 🚀🚀 "CallBack Hell"->  When we continue passing callback functions as the argument to another function and if this process happens for a long time and forms a chain kind of thing or if in our code there is something present like nested callbacks, then that thing is known as "callback hell", because it increases the pain of readability of the code and also affects understanding of the code.

// let first = (callback) => {
//     console.log("first")
//     callback()
// }

// let second = (callback) => {
//     setTimeout(() => {
//         console.log("second")
//         callback()
//     }, 2000)
// }

// let third = (callback) => {
//     console.log("third")
//     callback()
// }

// let fourth = () => {
//     console.log("fourth")
// }

// first(() => {
//     second(() => {
//         third(() => {
//             fourth()
//         })
//     })
// })


// 🚀🚀 Promise -> to solve the problem of callback hell promise has been introduced. Now. let's first create a problem and then first let's try to solve that problem with CallBack and then let's see how promise can solve that same problem and can help us not to get indulged into "CallBack Hell" promeise ->

// 🚀 problem ->

// let first=()=>{
//     setTimeout(()=>{
//         console.log("first function is called successfully, Please call second function")
//     },1000)
// }

// let second=()=>{
//     setTimeout(()=>{
//         console.log("second function is called successfully, Please call third function")
//     },1000)
// }

// let third=()=>{
//     setTimeout(()=>{
//         console.log("third function is also called successfully, all the steps are done successfully")
//     },1000)
// }

// first();
// second();
// third()

// 🚀 solution with CallBack ->

// let first=(cb)=>{
//     setTimeout(()=>{
//         console.log("first function is called successfully, Please call second function");
//         cb()
//     },1000)
// }

// let second=(cb)=>{
//     setTimeout(()=>{
//         console.log("second function is called successfully, Please call third function");
//         cb()
//     },1000)
// }

// let third=()=>{
//     setTimeout(()=>{
//         console.log("third function is also called successfully, all the steps are done successfully")
//     },1000)
// }

// first(()=>{second(()=>{third()})});

// 🚀 solution with Promise ->

// let first =()=>{
//     return new Promise((resolve, reject)=>{
//         if (true){
//             setTimeout(()=>{
//                 console.log("first function is called, Please call second function");
//                 resolve()
//             }, 1000);
//         }else{
//             reject("unable to call second")
//         }
//     })
// }

// let second =()=>{
//     return new Promise((resolve, reject)=>{
//         if (true){
//             setTimeout(()=>{
//                 console.log("second function is called, Plese call third function")
//                 resolve()
//             }, 1000);
//         }else{
//             reject("unable to call second")
//         }
//     })
// }

// let third =()=>{
//     return new Promise((resolve, reject)=>{
//         if (true){
//             setTimeout(()=>{
//                 console.log("third function is called, all the steps done successfully")
//                 resolve()
//             }, 1000);
//         }else{
//             reject("unable to call second")
//         }
//     })
// }

// let promise =()=>{
//         return new Promise((resolve, reject)=>{
//             if (true){
//                 console.log("printing data")
//                 resolve()
//             }else{
//                 reject("failed")
//             }
//         })
// }

// promise()
// .then(first)
// .then(second)
// .then(third)
// .catch((error)=>console.log(error))


// 🚀🚀 But if we will notice carefully, then we can see that the above solution, where we are using promise, that can solve the problem which we were facing at the time of "CallBack"(which is also known as "CallBack Hell"), but again we are creating a promise chain. So to solve this problem a new solution has been introduced, which is known as "async await", Let's see how we can solve the problem of "promise chain" with the help of "async await" ->

// let first =()=>{
//     return new Promise((resolve, reject)=>{
//         if (true){
//             setTimeout(()=>{
//                 console.log("first function is called, Please call second function");
//                 resolve()
//             }, 1000);
//         }else{
//             reject("unable to call second")
//         }
//     })
// }

// let second =()=>{
//     return new Promise((resolve, reject)=>{
//         if (true){
//             setTimeout(()=>{
//                 console.log("second function is called, Plese call third function")
//                 resolve()
//             }, 1000);
//         }else{
//             reject("unable to call second")
//         }
//     })
// }

// let third =()=>{
//     return new Promise((resolve, reject)=>{
//         if (true){
//             setTimeout(()=>{
//                 console.log("third function is called, all the steps done successfully")
//                 resolve()
//             }, 1000);
//         }else{
//             reject("unable to call second")
//         }
//     })
// }

// let asyncAwait =async ()=>{
//     console.log("printing data");
//     await first();
//     await second();
//     await third();
// }

// asyncAwait()