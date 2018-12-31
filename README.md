# pkg-random

### Install

```$ npm i pkg-random --save```

------

### Usage

```js
const random = require("pkg-random")
```

------

### Commands List

- [variate](#variate)
- [choice(array)](#choicearray)
- [choices(array , n)](#choicesarray-n)
- [randint(min, max)](#randintmin-max))
- [range(min, max)](#rangemin-max)
- [sample(array, n)](#samplearray-n)
- [shuffle(array)](#shufflearray)

- [word()](#word)
- [wordArray(min, max)](#wordArraymin-max)
- [sentence(l)](#sentencel)
- [sentenceArray(n, min, max)](#sentenceArrayn-min-max)

### Variate()

  *This function returns a random floating point number between 0 and 1.*

##### Usage

```js
  const random = require("pkg-random");
  console.log(random.variate()); // Outputs a random fraction
```

------

### Choice(array)

  *This function returns a randomly chosen element from an array.*

##### Usage

```js
  const random = require("pkg-random");
  
  let a = [12,23,34,45,56,67,78,89,90,98,87,76,65,54,43,32,21];
  
  console.log(random.choice(a)); // Outputs a random number from array(a)
```

  ***This also works for a string instead of arrays.***

```js
  const random = require("pkg-random");
  
  let s = "Hello World!";
  
  console.log(random.choice(s)); // Outputs a random character from the string(s)
```

  ***Returns*** `undefined` ***if the argument is neither an array nor a string.***

------

### Choices(array, n)

  *This function returns an array of n elements from the array. The elements might be repeated.*

##### Usage

```js
  const random = require("pkg-random");
  
  let a = [12,23,34,45,56,67,78,89,90,98,87,76,65,54,43,32,21]
  console.log(random.choices(a, 4)) // Outputs an array of 4 randomly chosen elements from array(a)
```

  ***This also works for a string instead of arrays.***

```js
  const random = require("pkg-random");
  
  let s = "Hello World!"
  console.log(random.choices(s, 4)) // Outputs an array of 4 randomly chosen elements from string(s)
```

  ***Returns*** `undefined` ***if the argument is neither an array nor a string.***

------

### Randint(min, max)

  *This function returns a random integer from the specified range including the end points specified i.e. from the interval **[ min , max ]***

##### Usage

```js
  const random = require("pkg-random");
  
  console.log(random.randint(-34,50)) // Outputs a random integer between -34 and 50
```

  ***Your app will  be stuck at infinite loop if min > max***

------

### Range

  *This function returns a random integer from the specified range excluding the end points specified i.e. from the interval **( min , max )***

##### Usage

```js
  const random = require("pkg-random");
  
  console.log(random.range(-104,908)) // Outputs a random integer between -104 and 908
```

  ***Your app will  be stuck at infinite loop if min > max***

------

### Sample(array, n)

  *This function returns an array of n unique elements from the array.*

##### Usage

```js
  const random = require("pkg-random");
  
  let a = [12,23,34,45,56,67,78,89,90,98,87,76,65,54,43,32,21]
  console.log(random.sample(a,5)) // Outputs an array of 5 unique elements from a
```

  ***Difference between*** `choices` ***and*** `sample` ***is that sample picks unique elements while elements can repeat in choices.***

------

### Shuffle(array)

  *This function shuffles the array passed as argument and returns the shuffled array.*

##### Usage

```js
  const random = require("pkg-random");
  
  let a = [12,23,34,45,56,67,78,89,90,98,87,76,65,54,43,32,21]
  console.log(random.shuffle(a)) // Outputs array(a) after shuffling it.
```

------

### word()

*This function returns a random word from the English dictionary.*

##### Usage

```js
const random = require("pkg-random");

console.log(random.word()); // Outputs a random word.
```

------

### wordArray(min, max)

*This function returns an array of minimum `min` and maximum `max` randomly selected words.*

```js
const random = require("pkg-random");

console.log(random.wordArray(4,8));	// Returns an array of random words.
```

***This returns an array of*** `min` ***words if*** `max` ***is not specified.***

------

### sentence(l)

*This function returns a sentence made up of* `l` *randomly selected words.*

##### Usage

```js
const random = require("pkg-random");

console.log(random.sentence(6)) // Outputs a sentence made up of 6 randomly selected words.
```

------

### sentenceArray(n, min, max)

*This function returns an array of n sentences, each with a minimum of* `min` *and maximum of* `max` *randomly selected words.*

##### Usage

```js
const random = require("pkg-random");

console.log(random.sentenceArray(5, 4, 8)) // Outputs an array of 5 sentences, each having at least 4 and at most 8 words
```

***This returns an array of n sentences, each with*** `min` ***words if*** `max` ***is not specified.***

------

### Tips and Tricks

- **Get a random double between a specified range**

  ```js
  const random = require("pkg-random");
  
  console.log(random.range( min , max ) + random.variate())
  ```

- **Get a random positive integer in the range `0 to a random integer between min and max`.**

  ```js
  const random = require("pkg-random");
  
  console.log(random.range( min, max ) * random.variate())
  ```
