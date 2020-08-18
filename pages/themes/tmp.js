function update(name, age){
	this.name = name;
	this.age = age;
}

let maria = {name: "Maria", age:18};
console.log("maria before", maria);

update.call(maria, "Maria Ivanova", 23);
console.log("maria after", maria);