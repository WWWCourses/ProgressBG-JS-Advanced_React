// generate array of integers - needed for tests bellow:
let testArrays = [
	Array.from({length:3_000_000},(_,i)=>i+1),
	Array.from({length:1_000_000},(_,i)=>i+1),
	Array.from({length:2_000_000},(_,i)=>i+1),

];

// TODO: not finished
var sumArray = (array) => {
    console.log(`starting a sumArrays promise`)
    return new Promise(resolve => {
		array=>array.reduce((ac,el)=>ac+el);
        // setTimeout(function() {
        //     resolve(25)
        //     console.log(`slow promise is done on: ${func}`)
        // }, 25000)
    })
}

function asyncDemo(){
	//sumArrayAsync is executed asynchronous and is not blocking the rest of the code!
	console.time('asyncDemo');
	testArrays.forEach( (arr)=>{
		sumArrayAsync(arr, array=>array.reduce((ac,el)=>ac+el));
	})

	console.timeEnd('asyncDemo');
}

console.log(`~~~~~ Sync execution ~~~~~`);
asyncDemo();
