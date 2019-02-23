let delay = function(time){
	return new Promise((resolve, reject)=>{
		if(typeof(time)==='number'){
			setTimeout(resolve, time)
		}else{
			reject('Upps, something went wrong')
		}

	})
}

let greet = function(name){
	return function(){
		console.log(`Hello ${name}`);
	}
}

delay(1000)
.then(greet('Ada'))
.catch(msg=>console.log(msg))

