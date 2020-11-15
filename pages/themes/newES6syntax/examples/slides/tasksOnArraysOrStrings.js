const arr = ["ala", "test", "a", "three", "best"];
const sortedArr = arr.sort( (a,b) => a.length <= b.length? -1:1  );
console.log(`arr:${arr}`);
// console.log(`sortedArr:${sortedArr}`);

