let obj = { a:1, b:2 };

let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);

// console.log("keys:", keys);
// console.log("values:", values);
// console.log("entries:", entries);




// for(const key of keys){
// 	console.log(`${key} - ${obj[key]}`);
// }


// for(const value of values){
// 	console.log(values);
// // }

for(const [key,value] of entries){
	console.log(`${key} - ${value}`);
}