// by object literal
const objLiteral = {}

// by Object.create method
const objCreateNormal = Object.create({});
const objCreateNull = Object.create(null);

// by Object.assign method
const objAssign = Object.assign({},{});

// by Object constructor
const objObjectConstructor = new Object()

console.dir(objLiteral);
console.dir(objCreateNormal);
console.dir(objCreateNull);
console.dir(objAssign);
console.dir(objObjectConstructor);