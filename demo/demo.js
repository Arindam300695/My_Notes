// class Member {
//   constructor(Name, Age, Phone_number, Address, Salary) {
//     this.Name = Name;
//     this.Age = Age;
//     this.Phone_number = Phone_number;
//     this.Address = Address;
//     this.Salary = Salary;
//     this.printSalary = function () {
//       console.log(this.Salary);
//     };
//   }
// }
// class Employee extends Member {
//   constructor(a, b, c, d, e, specialization) {
//     super(a, b, c, d, e);
//     this.specialization = specialization;
//     this.print_details = function () {
//       console.log(this.Name);
//       console.log(this.specialization);
//       this.printSalary();
//     };
//   }
// }
// class Manager extends Member {
//   constructor(a, b, c, d, e, department) {
//     super(a, b, c, d, e);
//     this.department = department;
//     this.print_details = function () {
//       console.log(this.Name);
//       console.log(this.department);
//       this.printSalary();
//     };
//   }
// }

// // var obj = new Employee("Ram", 25, "7003", "Bangalore", 1000, "cse");
// // obj.print_details();

// var obj_Man = new Manager("babu", 100, "1234", "Bangalore", 1000, "JP");
// obj_Man.print_details();

// function print(N, target) {

// }
// console.log(print([2, 7, 11, 15], 9));

// function print(prices) {
//   let profit = 0;
//   let temp;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] < prices[j]) {
//         temp = prices[j] - prices[i];
//         if (temp > profit) {
//           profit = temp;
//         }
//       }
//     }
//   }
//   return profit;
// }
// console.log(print([7, 6, 4, 3, 1]));

// function print() {
//   for (let i = 1; i <= 5; i++) {
//     let str = "";
//     let count = i,
//       print = i;
//     for (let k = 4; k >= i; k--) {
//       str += " ";
//     }
//     for (let j = 0; j < 2 * i - 1; j++) {
//       str += print;
//       if (count < 2 * i - 1) {
//         print++;
//       } else {
//         print--;
//       }
//       count++;
//     }
//     for (let k = 4; k >= i; k--) {
//       str += " ";
//     }
//     console.log(str);
//   }
// }
// print();

// function print(nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
//   // return ans;
//   console.log(nums);
// }
// // console.log(print([1, 2, 3, 4, 5, 6, 7], 3));
// print([1, 2, 3, 4, 5, 6, 7], 3);

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
// }

// let obj1 = new Employee("Babu_Rao ", 150);
// let obj2 = new Employee("Raju ", 160);
// let obj3 = new Employee("Shyam ", 140);
// let obj4 = new Employee("Pappu", 200);
// let obj5 = new Employee("Rahul", 100);
// let obj6 = new Employee("Nobita", 300);
// let obj7 = new Employee("Lallu", 180);

// function print(arr) {
//   let ans = [];
//   let finalAnswers = [];
//   let count = 0;
//   let myMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     myMap.set(arr[i].name, arr[i].salary);
//   }
//   myMap.forEach((value) => {
//     ans.push(value);
//   });
//   for (let i = ans.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (ans[j] > ans[j + 1]) {
//         [ans[j], ans[j + 1]] = [ans[j + 1], ans[j]];
//       }
//     }
//   }
//   for (let i = 0; i < ans.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (ans[i] == arr[j].salary) {
//         ans[i] = j;
//       }
//     }
//   }
//   for (let i = 0; i < ans.length; i++) {
//     count = ans[i];
//     ans[i] = arr[count];
//   }
//   console.log(ans);
// }
// print([obj1, obj2, obj3, obj4, obj5, obj6, obj7]);

// function print(arr, length) {
//   let ans = [];
//   let count = 0;
//   let n = length;
//   for (let i = 0; i < n; i++) {
//     ans.push(arr[i].salary);
//   }
//   // sorting the array according to the increasing salary order
//   for (let i = n - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (ans[j] > ans[j + 1]) {
//         [ans[j], ans[j + 1]] = [ans[j + 1], ans[j]];
//       }
//     }
//   }
//   // finding out the index nos of the input array according to the sorted salary order
//   for (let i = 0; i < ans.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (ans[i] == arr[j].salary) {
//         ans[i] = j;
//       }
//     }
//   }
//   // according to the sorted index setting the objects of the given input array
//   for (let i = 0; i < ans.length; i++) {
//     count = ans[i];
//     ans[i] = arr[count];
//   }
//   return ans;
// }
// console.log(print([obj1, obj2, obj3, obj4, obj5, obj6, obj7], 7));

// function print(n) {
//   let count = 0;
//   let start = 2;
//   while (start < n) {
//     let isPrime = true;
//     for (let i = 2; i < start; i++) {
//       if (start % i === 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       count += 1;
//     }
//     start += 1;
//     console.log("start = " + start);
//     console.log("count = " + count);
//     console.log("isPrime = " + isPrime);
//   }
//   return count;
// }
// console.log(print(10));

// function print(jewels, stones) {
//   let count = 0;
//   for (let i = 0; i < stones.length; i++) {
//     if (jewels.includes(stones[i])) {
//       count += 1;
//     }
//   }
//   return count;
// }
// print("aA", "aAAbbbb");

// function print(nums, k) {
//   let deletedArray = nums.splice(nums.length - k);
//   for (let i = 0; i < deletedArray.length; i++) {
//     nums.splice(i, 0, deletedArray[i]);
//   }
//   return nums;
// }
// print([1, 2, 3, 4, 5, 6, 7], 3);

// function print(pushed, popped) {
//   let stack = [];
//   if (pushed.length !== popped.length) {
//     return false;
//   }
//   let i = 0;
//   j = 0;
//   while (i < pushed.length) {
//     stack.push(pushed[i]);
//     while (
//       stack.length !== 0 &&
//       j < popped.length &&
//       stack[stack.length - 1] === popped[j]
//     ) {
//       stack.pop();
//       j++;
//     }
//     i++;
//   }
//   if (stack.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// print([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);

// class LinkedList {
//   // constructor function for creating the linkied list with the head and the tail!
//   constructor() {
//     this.head = {
//       value: 100,
//       next: null,
//     };
//     this.tail = this.head;
//     this.size = 1;
//   }
//   // function to append a new node to the end of the linked list!
//   appendNode(data) {
//     let newNode = {
//       value: data,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.size += 1;
//   }
//   // function to traverse through the node!
//   traversing() {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter < this.size) {
//       console.log(currentNode);
//       currentNode = currentNode.next;
//       counter += 1;
//     }
//   }
//   // function to delete a particular node based on the given index no!
//   deleteNode(indexNo) {
//     let counter = 1;
//     let leadNode = this.head;
//     let nextNode;
//     if (indexNo === 1) {
//       leadNode = leadNode.next;
//       nextNode = leadNode.next;
//       leadNode.next = nextNode;
//       this.head = leadNode;
//       this.size -= 1;
//     } else if (indexNo <= 0 || indexNo > this.size) {
//       console.log(
//         "invalid index, please enter a valid index no to delete a node"
//       );
//     } else {
//       while (counter < indexNo - 1) {
//         leadNode = leadNode.next;
//         counter++;
//       }
//       nextNode = leadNode.next.next;
//       leadNode.next = nextNode;
//       this.size -= 1;
//     }
//   }
//   // function to add node at any given point based on the given index no!
//   insertAt(indexNo, data) {
//     let newNode = {
//       value: data,
//       next: null,
//     };
//     let currentNode = this.head;
//     let counter = 1;
//     let tempNode;
//     if (indexNo === 1) {
//       this.head = newNode;
//       this.size--;
//     } else if (indexNo <= 0 || indexNo > this.size + 1) {
//       console.log("invalid index no");
//     } else {
//       while (counter < indexNo - 1) {
//         currentNode = currentNode.next;
//         counter++;
//       }
//       tempNode = currentNode.next;
//       currentNode.next = newNode;
//       newNode.next = tempNode;
//       this.size++;
//     }
//   }
// }

// let node1 = new LinkedList();
// node1.appendNode(200);
// node1.appendNode(300);
// node1.appendNode(400);
// node1.appendNode(500);
// // node1.traversing();
// // node1.deleteNode(2);
// node1.insertAt(6, 800);
// console.log(node1);

// function allSubseq(new_str, str, index) {
//   if (new_str.length !== 0) {
//     console.log(new_str);
//   }
//   if (index === str.length) {
//     return;
//   }
//   for (let i = index; i < str.length; i++) {
//     new_str.push(str[i]);
//     allSubseq(new_str, str, i + 1);
//     new_str.pop(); // Backtracking step
//   }
// }
// let str = [1, 2, 3];
// new_str = [];
// allSubseq(new_str, str, 0);

// let stringOne = "USA";
// let stringTwo = "sharpener";
// let stringThree = "Google";
// let patternOne = /^[A-Z]*$/;
// let patternTwo = /^[a-z]*$/;
// let patternThree = /^[A-Z][a-z]*$/;
// if (patternOne.test(s) || patternTwo.test(s) || patternThree.test(s))
//   return true;
// return false;
