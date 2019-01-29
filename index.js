class Random{


	// Returns a random number between 0 and 1
	static variate(){
		return Math.random()
	}


	// Returns a random element from the array
	// If the array is actually a string, returns a random character from string
	// Returns undefined otherwise
	/**
	*@param {Array} arr the Array from which to chose
	*/
	static choice(arr){
		if(arr.length < 1){
			return undefined
		}
		else{
			return arr[Math.floor(Math.random() * arr.length)]
		}
	}


	// Returns a randomly shuffled array
	static shuffle(a){
		let newArr = []
		for(let i = 0; i < a.length; i++){
			newArr.push(this.choice(a))
		}
		return newArr
	}


	// Returns an array of n random elements from arr (if arr is an array)
	// Returns an array of n random characters from arr (if arr is a string)
	// Returns undefined otherwise
	static choices(arr, n){
		if(arr.length  > 0){
			let a = this.shuffle(arr)
			let newArray = []
			for(let i = 0; i < n; i++){
				newArray.push(a[i])
			}
			return newArray
		}
		else{
			return undefined
		}
	}


	// Returns a random integer from the range of min and max inclusive
	// It will be stuck at infinite loop if min > max
	static randint(min, max){
		let x = 0
		if( min < 0 )
			x = (min-10)

		if(-min > max){
			while(-x > max){
				x = Math.floor(Math.random()* -min)
			}
		}
		else{
			while(x < min){
				x = Math.floor(Math.random() * max)
			}
		}

		if(min < 0){
			if(this.choice([true, false]) == true){
				if(x <= max)
					return x
				else
					return -x
			}
			else{
				if(-x < max){
					return -x
				}
				else{
					return x
				}
			}
		}
		else{
			return x
		}
	}


	// Returns random integer from min and max excluding the boundaries
	// It will be stuck at infinite loop if min > max
	static range(min, max){
		let x = 0
		if( min < 0 )
			x = (min-10)

		if(-min > max){
			while(-x > max || -x < (min+1)){
				x = Math.floor(Math.random()* -min)
			}
		}
		else{
			while(x < (min+1) || x > (max-1)){
				x = Math.floor(Math.random() * max)
			}
		}

		if(min < 0){
			if(this.choice([true, false]) == true){
				if(x < max)
					return x
				else
					return -x
			}
			else{
				if(-x < max){
					return -x
				}
				else{
					return x
				}
			}
		}
		else{
			return x
		}
	}


	// Returns an array of n randomly selected elements from arr
	// Returns an array of n randomly selected characters if arr is string
	// Returns undefined otherwise
	static sample(arr, n){
		if(arr.length < 1)
			return undefined
		else{
			let a = this.shuffle(arr)
			let newArray = []
			console.log(a)
			for(let i = 0; i < n; i++){
				newArray.push(a.shift())
			}
			return newArray
		}
	}

}

module.exports = Random
exports.printMsg = function(){
	console.log("Imported random");
}
