// generate array of integers - needed for tests bellow:
let testArrays = [
	Array.from({length:1_000_000},(_,i)=>i+1),
	Array.from({length:2_000_000},(_,i)=>i+1),
	Array.from({length:3_000_000},(_,i)=>i+1),
];
function syncDemo(){
	console.time('syncDemo');
	testArrays.forEach(arr=>{
		console.log(arr.reduce((ac, el)=>ac+el));
	})
	console.timeEnd('syncDemo');
}
function asyncDemo(){
	//setTimeout is executed asynchronous and is not blocking the rest of the code!
	console.time('asyncDemo');
	testArrays.forEach(arr=>{
		setTimeout(()=>{console.log( arr.reduce((ac, el)=>ac+el) )}, 0)
	})
	console.timeEnd('asyncDemo');
}

console.log(`~~~~~ Sync execution ~~~~~`);
syncDemo();

console.log(`\n~~~~~ Async execution ~~~~~`);
asyncDemo();