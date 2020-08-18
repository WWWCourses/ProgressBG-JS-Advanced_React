function Constructor(id) {
	this.id = id;
	this.count = 0;

	_count = function() {
		this.count++;
	};
	this.incrementCount = function() {
		_count();
		console.log(`count: ${this.count}`);
	};
}

var obj1 = new Constructor(1);
obj1.incrementCount();
// obj1.count();
