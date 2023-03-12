//  One thing we need to remember always that Java and JavaScript are not Same.
//  Now let's understand why we needed JavaScript??
//  ------> JavaScript is everywhere, we need to remember this statement (like we can use Js, Jquery, React js to  do coding for client side, we can use Node js, Express js to code server side of an website, we can use React Native to code mobile applications, we can use Electronic js to code softwares example -> VS Code)
//  Statement and Comments
//  Let's now dive into the topics directly --------->

//  🚀🚀 what is variable? -------> variable is like a container which we can use to store some data which we want to use several times as per our requierement.  There are three types of Variables in JavaScript ----> var, let and const  ======>   we need to remember that var is a global variable. let and const has been introduced in ES6. cosnt means constatn, which means if we are using const variable then the value which we are assigning to const that value cannot be changed later on. let is kind of similar to var but there are some differences, which we will look into later on.
// let's see the naming convention of variables ------------> 1) name of the variable will also start with letters only not with numbers. 2) we cannot use special charecter at the starting of any variables name except than "_" and "$". 3) we should follow camelCase while naming the variables. 4) we need to use some convinient or meaningful names for the variables, there are some reserved keywords which we can't use as naming any variable. 5) we can assign any value to any variable, like we need not to mention the data types in JavaScript. 6) we can first use empty variable and then can assign some value to it if required but need to remember that without assigning any value if we want to use that variable later on then we will get the result as undefined which means we have declared that variable but have not assigned any value to it.


// 🚀🚀 JavaScript Operators ------->
//  A) Mathematical Operators ---------------------------> 
//         1) assignment operators ----> "="
//         2) addition operator ------> "+"
//         3) multiplication operator -----> "*"
//         4) division operator ----> "/"
//         5) substraction operator -------> "-"
//         6) exponential operator ------------> "**"
//         7) modulus operator -----------> "%"
//         8) increment operator ----------> "++"
//         9) decrement operator -------> "--"
//   B) Comparison Operators ------------------------------->
//         1) equal to ---------------> "=="
//         2) equal value and equal type -----------> "==="
//         3) not equal -------------> "!="
//         4) not equal value or not equal type ------> "!=="
//         5) greater than ------------> ">"
//         6) less than ---------------> "<"
//         7) greater than or equal to -------------> ">="
//         8) less than or equal to ------------> "<="
//         9) ternary operator ------------> "?"
//    C) Logical Operators --------------------------------->
//         1) and operator -----------> "&&"
//         2) or operator -----------------> "||"
//         3) not operator --------------> "!"
//    D) Specail operators in JavaScript -------------------> 
//         1) typeof operator (is used to determine the type of data)
//         2) instanceof operator (returns boolean value if an object is an object type or an array is an array type)
//         3) unary + opearator (is used to convert a string to a number)


// 🚀🚀 Now let's see the data types in JavaScript ------->
//  number, string, boolean, bigint, undefined, null, symbol, array, object, date.


// 🚀🚀 some important topics that we need to learn ------------>
//   if, if else, else if, switch, break and continue statement, loops(for, while, do-while)
//   alert, confirm, prompt


//   🚀🚀let's now look into type conversion which means to convert one type of data into another type or to change the data type in JavaScript ---------------------->
//    some important methods to change the data type ------->
//   String(), Number(), Boolean() 


//  🚀🚀 ----------------------> Let's now look into some of the string methods ----------------------->
// ------>    string.ndexOf(){it returnes the first occurance of the string or the charecter and if the string or the charecter is not available then this method will return "-1" as result, we can also provide the second argument if we want to start finding from a certain place},
//  ------->     string.lastIndexOf(){same as indexOf() method but it returns the index no of the last occurance of the given string or charecter},
//  -------------->    string.toUpperCase(){convert the given string into uppercase},
//   ------------>   string.toLowerCase(){convert the given string to Lower Case}        
//  ------->    string.search(){this method is used to find out certain string or charecter and that to of the first occurance as it will start finding process from the begining and we can't pass any second argument to it}, 
//   ------->   string.slice(start index included, stop index excluded){it will slice out or extract a particular part of the string as per our requirement, we can also pass negative value if we want and we need to remember that positive index means from left to right whereas negative index means from right to left}
//   --------->   string.substring(start index included, stop index excluded){same as slice but the only difference is in this method we cannot pass negative index vlaue}
//   ----------->   string.substr(start index, length of the charecter that we want to extract){it accepts negative index value}
//   ---------->   string.replace(old-string, new-string){it will replace the first occurance only}
//   ------------->   string.concat(){is used to do the concatination}
//   ------------->   string.includes(){returns true or false if the string contains the part that we are looking for, and this method is case sensetive}
//   --------------> string.startsWith() and string.endsWith(){returns true or false depending upon the presence of the part at starting or ending point that we are looking for, and these two methods are as well case sensetive}
//   ----------->  string.match(){same as search but the difference is this method will find out all the strings or charecters and returns the array containing all the data}
//   ------------>   string.trim(){it removes all the leading and trailing spaces, but not the space that is there in-between the string}
//   ------------>   string.charAt(posiition or index){is used to find out the charecter of any particular position}
//   ------------>   string.charCodeAt(){it returns the unicode of the charecter of the given position}
//   ------------> how to access some certain charecters of a string?  {same as we access array items}


//  🚀🚀 ----------------------> Let's now look into some of the number methods ----------------------->
//  ---------> toString(){it will convert the number data type into string data type}
//  ----------> toExponential(value that we want){for example if we have 3 as value then the power will be 3}
//  ----------> toFixed(value that we want){for example supose the no. is 5.4566 and the value is 2 then the result will be 5.46}
//  -----------> toPrecision(value that we want){here value represents the length of the number, we need to remember that for this case the returned result will be a string so we need to convert the result into a number using any of the 3 methods --->   Number(), ParseInt(), ParseFlooat()}
//   -----------> MIN_VALUE, MAX_VALUE, POSITIVE_INFINITY, NEGATIVE_INFINITY, NaN{this are some of the number properties not methods.}


//   🚀🚀 ------------> Let's now learn some of the math methods and properties -------------->
//   Math.e ---------------> returns the eular no
//   Math.PI ----------------> returns the PI value
//   Math.SQRTn --------------> returns the square root of n
//   Math.SQRT1_2 ------------> returns the square root of 1/2
//   Math.LN2 ------------------> returns the value of log2
//   Math.LN10 ------------------> returns the value of log10
//   Math.LN2E ------------------> returns the value of log2 base e
//   Math.LN10E ------------------> returns the value of log10 base e
//   -------------> Math.abs(value that we want){if the value is -x then the result will be x}
//   -------------> Math.cbrt(vlaue) {it will return the cuberoot of the number that we will pass as the parameter}
//   ---------------> Math.exp(){put the value as power to the number with which we are using this method}
//   ----------------> Math.pow(x,y){gives the value of y to the power x}
//   ------------------> Math.min(){gives the minium value}
//   ------------------> Math.max(){gives the maximum value}
//   ------------------> Math.random(){will give the random number between 0 and 1}
//   ------------------> Math.round(x){if the decimal is <5 then this method will round down x and if the decimal is >5 then this method will round up x}
//   -----------> Math.sqrt(x){returns the square root of x}
//    ------------> Math.trunc(x){it will return only the intiger part of x only and will omit the decimal value}
//  ---------------> Math.floor(x){it will round down x}


//  🚀🚀  ------------> let's now look into some of the date methods -------------->
//  var now = new Date() {we can pass a certain date, month and year as argument if we want to find out information about past} 
//   -----------> now.toDateString(){returns today's date in a readable format}
//  --------------> now.getDate(){returns today's date}
//   --------------> now.getFullYear(){returns current year}
//    -------------> now.getMonth(){returns the no of month, we need to remember 0 is the value of January and 1 is the value of February}
//  --------------> now.getDay(){returns the no of day, we need to remember that 0 is the value of Sunday and 1 is the value of Monday}
//  -------------> now.getHours(){returns current hour}
//   ------------> now.getMinutes(){returns current minute}
//   -----------> now.getSeconds(){returns current second}
//  --------------> now.getMiliseconds(){returns current miliseconds}
//    -------------> now.setDate(), now.setFullYear(), now.setMonth(), now.setDay(), now.setHours(), now.setMinutes(), now,setSeconds(), now.setMiliseconds()
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

