// generate array of integers - needed for tests bellow:
let testArrays = [
	Array.from({length:3_000_000},(_,i)=>i+1),
	Array.from({length:1_000_000},(_,i)=>i+1),
	Array.from({length:2_000_000},(_,i)=>i+1),

];

// TODO: not working
function calcArraySum(array,callback) {
	let sum = array.reduce((ac,el)=>ac+el);
	callback(sum, array);
}

function showArraySum(sum,array) {
	console.log(`Sum of array(${array.length} = ${sum})`);
}



function asyncDemo(){
	//sumArrayAsync is executed asynchronous and is not blocking the rest of the code!
	console.time('asyncDemo');
	testArrays.forEach( (arr)=>{
		console.time(`time sum array(${arr.length})`);
		calcArraySum(arr, showArraySum);
		console.timeEnd(`time sum array(${arr.length})`);
	})

	console.timeEnd('asyncDemo');
}

console.log(`~~~~~ Sync execution ~~~~~`);
asyncDemo();
