// generate array of integers -needed for tests bellow:
let arr1 = Array.from({length:1_000_000},(a,b)=>b+1);
let arr2 = Array.from({length:2_000_000},(a,b)=>b+1);
let arr3 = Array.from({length:2_000_000},(a,b)=>b+1);


function syncDemo(){
	console.time('syncDemo');
	console.log(arr1.reduce((ac, el)=>ac+el));
	console.log(arr2.reduce((ac, el)=>ac+el));
	console.log(arr3.reduce((ac, el)=>ac+el));
	console.timeEnd('syncDemo');
}

function asyncDemo(){
	//setTimeout is executed asynchronous and is not blocking the rest of the code!
	console.time('asyncDemo');
	setTimeout(()=>{console.log( arr1.reduce((ac, el)=>ac+el) )}, 0)
	setTimeout(()=>{console.log( arr2.reduce((ac, el)=>ac+el) )}, 0)
	setTimeout(()=>{console.log( arr3.reduce((ac, el)=>ac+el) )}, 0)
	console.timeEnd('asyncDemo');
}

console.log(`~~~~~ Sync execution ~~~~~`);
syncDemo();

console.log(`\n~~~~~ Async execution ~~~~~`);
asyncDemo();