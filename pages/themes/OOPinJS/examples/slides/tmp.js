var obj = {};
var keyName = 2;

obj["1"] = "first"; 		// valid
obj[keyName]   = "second"; 	// valid

console.log(obj)
// Object {1: "first", 2: "second"}