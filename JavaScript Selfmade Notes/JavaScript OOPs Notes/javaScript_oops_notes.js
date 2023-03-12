// ----------------> JavaScript OOP ----------------------->
// It was introduced in ES6 Version and some of it's benefits are ----------------------->
//  ---------> Code more Modular and Reusable
//  ----------> Well organized code
//  -------------> Easier to debug
//  -------------> Best for medium to large website projects
//  -------------> This concept is mainly used in js framewrks like  -----> React, Angular, Vue etc......

//  ------> There are mainly two concepts in OOPs -------->
//  ----------> Class(Blueprint) and Object(We can assume that this is derived from Class so it will have all the methods and the properties of Class)


//  Class contains two things ----> Methods(this is kind of functions) and Propweties.
//  Now let's see how to define a class and how to create object from that class ===================>

//   class hello{
//     message(){
//         console.log("Hello Everyone")
//     }
//   }

//   let a = new hello()
// console.log(a)
//   a.message()

//  -------------------> types of methods ------------------>
//  ---------> constructor, prototype, static

//   --------> constructor function ===========>
// class student {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//         console.log(`Constructor Function created`)
//     }
//     hello=()=> {
//         console.log(`hello ${this.name}, are you ${this.age} 
// years old??`)
//     }
//     hi=(myAge)=>{
//         console.log(`Hi, No ${this.name}, I am ${myAge} years old`)
//     }
//     static staticMethod=()=>{
//         console.log(`I am a Static Method`)
//     }
// }
// let Peter = new student("Derek", 27)
// let Derek = new student("Peter")
// // a.name = "Derek"
// Peter.hello()
// Derek.hi(30)
// student.staticMethod()

