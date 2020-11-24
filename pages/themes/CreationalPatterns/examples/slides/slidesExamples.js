const singelton = {
	'cachingTheSingularInstance': function(){
		//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		function Car(name, speed) {
			// check for existing instance
			if (typeof Car.instance === "object"){
				return Car.instance;
			}

			// set instance properties
			this.name = name || 'Car';
			this.speed = speed || 180;

			// cache the instance
			Car.instance = this;
		}

		// lets try to create 2 instances
		const car1 = new Car('car1', 200);
		const car2 = new Car('car2', 300);

		// test if we have ONLY ONE instance:
		console.log(car1 === car2);
		//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'instanceInAClosure': function(){
		//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		function Car(name, speed) {
			// cache the instance
			const instance = this;

			// set instance properties
			this.name = name || 'Car';
			this.speed = speed || 180;

			// rewrite the constructor
			Car = function(){
				return instance;
			};
		}

		// lets try to create 2 instances
		const car1 = new Car('car1', 200);
		const car2 = new Car('car2', 300);

		// test if we have ONLY ONE instance:
		console.log(car1 === car2);
		//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
};

const modules = {
	'asLiteral': function(){
		//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		const myModule = {
			config: {
				encoding: 'UTF8',
				maxLength: '2048'
			},

			log: function(value, msg){
				msg?
				console.log(`${msg}: ${value}\n\n`):
				console.log(`${value}\n\n`);

			}
		}

		const m = myModule;

		for( conf in m.config){
			m.log( m.config[conf], conf);
		}
		//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'theModulePattern': function(){
		//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		const myModule = (function(){
			// private
			const config = {
				encoding: 'UTF8',
				maxLength: '2048'
			};

			const log = function(value, msg){
				msg?
				console.log(`${msg}: ${value}\n\n`):
				console.log(`${value}\n\n`);

			};

			// API
			const showConfig =  function(){
				for( c in this.config ){
					this.log(this.config[c], this.config)
				}
			}

			return {
				showConfig: showConfig
			}
		})();

		myModule.showConfig();
		//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	}
}

const builder = {
	'tournament': function(){
		//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		const Event = (function () {
			function Event(name) {
				this.name = name;
			}
			return Event;
		})();
		const Westeros = {};

		Westeros.Event = Event;
		const Prize = (function () {
			function Prize(name) {
				this.name = name;
			}
			return Prize;
		})();
		Westeros.Prize = Prize;
		const Attendee = (function () {
			function Attendee(name) {
				this.name = name;
			}
			return Attendee;
		})();
		Westeros.Attendee = Attendee;
		//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
};

const factory = {
	'simpleFactory': function(){
		//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		// aux constructors
		function AudioPlayer(name){
			this.name = name;
			this.play = ()=>{
				console.log(`${this.name} is playing on Audio Player!`);
			}
		}
		function VideoPlayer(name){
			this.name = name;
			this.play = ()=>{
				console.log(`${this.name} is playing on Video Player!`);
			}
		}

		// the factory
		function mediaPlayerMaker(name) {
			if(name.match(/\.(?:mp3|ogg|flack)$/i) ){
				return new AudioPlayer(name);
			}else if (name.match(/\.(?:mp4|avi|divx)$/i)) {
				return new VideoPlayer(name);
			}
		}

		// the instancies
		const player1 = mediaPlayerMaker('time_lapse.mp3');
		const player2 = mediaPlayerMaker('micahel_nyman_band_live.avi');

		// the usage
		player1.play();
		player2.play();
		//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'encapsulated':function(){
		//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		const accountFactory = function(balance){
			// private members
			let _balance = balance;

			// public
			const obj = {
				getBalance: ()=>_balance,
				setBalance: (b)=>_balance = b,
			};

			return obj;
		}

		const obj1 = accountFactory(999999999);

		// let's try to change the balance directly:
		obj1._balance = 0;
		console.log(`New Balance: ${obj1.getBalance()}`);
		;
		// Balance = 999999999

		// let's try to change the balance through the setter:
		obj1.setBalance(0);
		console.log(`New Balance: ${obj1.getBalance()}`);
		// Balance = 0
		//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'encapsulatedWithGetterAndSetter':function(){
		//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		const accountFactory = function(balance){
			// private members
			let _balance = balance;

			// public
			const obj = {
				get balance(){
					return _balance
				},
				set balance(b){
					_balance = b
				}
			};

			return obj;
		}

		const obj1 = accountFactory(999999999);

		// let's try to change the balance directly:
		obj1._balance = 0;
		console.log(`New Balance: ${obj1.balance}`);
		;
		// Balance = 999999999

		// let's try to change the balance through the setter:
		obj1.balance = 0;
		console.log(`New Balance: ${obj1.balance}`);
		// Balance = 0
		//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	}

}

factory.encapsulated();
factory.encapsulatedWithGetterAndSetter();