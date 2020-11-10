// for...in
// let obj = {a:1, b:2};
// for(const key in obj){
// 	console.log(`${key} - ${obj[key]}`);
// }


// const Person = function (name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.greet = function () {
// 	console.log(`Hello, I.m ${this.name} and I'm ${this.age} years old`);
// }

// let pesho = new Person('Pesho', 23);
// // pesho.greet();

// for(const key in pesho){
// 	if(pesho.hasOwnProperty(key)){
// 		console.log(`${key} - ${pesho[key]}`);
// 	}
// }

// for...of
let obj = {a:1, b:2};
for(const key of obj){
	console.log(`key: ${key}`);
}

// let arr = [3,4];
// arr.a = 1;
// arr.b = 2;


// console.log(`for...in demo`);
// for(const prop in arr){
// 	console.log(`prop:${prop}`);
// }

// console.log(`for...of demo`);
// for(const prop of arr){
// 	console.log(`prop:${prop}`);
// }